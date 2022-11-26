let url = 'https://62a66ad3430ba53411d48b32.mockapi.io/accounts/';
let money;

let id = sessionStorage.getItem('id');
let loggedIn = sessionStorage.getItem('loggedIn') === 'true';

if (loggedIn !== true) {
    window.location.href = '../index.html';
}

fetch(url + id)
    .then((response) => response.json())
    .then((data) => {
        let p = document.querySelector('#money-text');
        let spanName = document.querySelector('#name');
        let spanPassword = document.querySelector('#password');
        let spanEmail = document.querySelector('#email');
        p.innerText = data.money + '$';
        money = parseInt(data.money);

        spanName.innerText = data.name;
        spanPassword.innerText = data.password;
        spanEmail.innerText = data.email;
    });

let deposit = document.querySelector('#deposit-btn');

let setMoney = () => {
    fetch(url + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            money: money,
        }),
    });
};

let setDisplay = () => {
    fetch(url + id)
        .then((response) => response.json())
        .then(() => {
            let p = document.querySelector('#money-text');
            p.innerText = money + '$';
            if (money < 0) {
                p.style.color = 'red';
            } else {
                p.style.color = 'black';
            }
        });
};

deposit.addEventListener('click', () => {
    let depositInput = parseInt(document.querySelector('#deposit-input').value);
    money += depositInput;
    setMoney();
    setDisplay();
});

let withdraw = document.querySelector('#withdraw-btn');

withdraw.addEventListener('click', () => {
    let withdrawInput = parseInt(
        document.querySelector('#withdraw-input').value
    );
    money -= withdrawInput;
    setMoney();
    setDisplay();
});

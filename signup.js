let url = 'https://62a66ad3430ba53411d48b32.mockapi.io/accounts/';
let btn = document.querySelector('button');
let btn2 = document.querySelector('#login')

btn.addEventListener('click', () => {
    let username = document.querySelector('#name').value;
    let password = document.querySelector('#password').value;
    let money = document.querySelector('#money').value;

    if(username !== "" && password !== "" && money !== ""){
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: username,
                password: password,
                money: money,
            }),
        });
        window.location.href = 'index.html';

    }

});

btn2.addEventListener('click', () => {
    window.location.href = 'index.html';
})
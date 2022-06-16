let btn = document.querySelector('#submit-button');
let btn2 = document.querySelector('#signup-button');
let url = 'https://62a66ad3430ba53411d48b32.mockapi.io/accounts/';
let input = document.querySelector('#password');

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btn.click();
    }
});

btn.addEventListener('click', () => {
    let username = document.querySelector('input[name="name"]').value;
    let password = document.querySelector('input[name="password"]').value;
    let loggedIn = false;
    let error = document.querySelector('p');

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((e) => {
                if (
                    (e.name === username || e.email === username) &&
                    e.password === password
                ) {
                    window.location.href = 'bank/bank.html';
                    loggedIn = true;
                    sessionStorage.setItem('id', e.id);
                }
            });
            if (!loggedIn) {
                error.style.visibility = 'visible';
            }
        })
        .catch((error) => alert(error));
});

console.log(btn2);
btn2.addEventListener('click', () => {
    window.location.href = 'signup/signup.html';
});

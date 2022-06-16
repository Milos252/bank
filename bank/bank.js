let url = 'https://62a66ad3430ba53411d48b32.mockapi.io/accounts/';

let id = sessionStorage.getItem('id');
let loggedIn = sessionStorage.getItem('loggedIn');

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
        spanName.innerText = data.name;
        spanPassword.innerText = data.password;
        spanEmail.innerText = data.email;
    });

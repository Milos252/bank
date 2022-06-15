let url = 'https://62a66ad3430ba53411d48b32.mockapi.io/accounts/';

let id = sessionStorage.getItem('id');
console.log(id)

fetch(url + id)
    .then((response) => response.json())
    .then((data) => {
        let p = document.querySelector('#money-text');
        let spanName = document.querySelector('#name');
        let spanPassword = document.querySelector('#password');
        p.innerText = data.money + '$';
        spanName.innerText = data.name;
        spanPassword.innerText = data.password;
    });

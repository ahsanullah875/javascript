const name = document.querySelector('#name');
const password = document.querySelector('#password');
const form = document.querySelector('#form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('name.value');
    console.log('password.value');
})
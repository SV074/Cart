let loginInput = document.querySelector('.login');
let passwordInput = document.querySelector('.password');
let btnSend = document.querySelector('.btn');
let info = document.getElementById('info');
let btnExitAccount = document.querySelector('.btn-exit');

let login;
let password;





function sendForm() {
    login = loginInput.value;
    password = passwordInput.value;

    let user = {
        login, password
    };

    if(login === 'dick' && password === '123') {

        info.innerHTML = "Correct";
        localStorage.setItem('user1', JSON.stringify(user));
        btnExitAccount.style.display ='block';

    }  else if(login === '', password === '') { 
        info.innerHTML = "Empty";
    } else {
        info.innerHTML = "Invalid login and password";
    }

}

btnSend.addEventListener('click', () => {
    sendForm();

});

function clearForm() {
    loginInput.value = "";
    passwordInput.value = "";
    info.innerHTML = "Welcome";
}

btnExitAccount.addEventListener('click', () => {
    localStorage.removeItem('user1');
    clearForm();
    btnExitAccount.style.display ='none';
})
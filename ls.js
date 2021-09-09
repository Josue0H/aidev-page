const login = document.getElementById('btn_login');
const register = document.getElementById('btn_register');
const nickname = document.getElementById('nicknameField');
const email = document.getElementById('emailField');
const password = document.getElementById('passwordField');
const userLbl = document.getElementById('user');
const userP = document.getElementById('userP');
login && login.addEventListener('click', handleLogin);
register && register.addEventListener('click', handleRegister);

onLoad();

function onLoad(){
    const user = localStorage.getItem('nn');
    if(user){
        userP.innerHTML = user;
        userP.className = 'text-center font-weight-bold text-white p-2 m-0';
    }
    else{
        userLbl.className = 'hide';
    }
}

function handleLogin(){
    var x = document.getElementById("snackbar");
    if(nickname && nickname.value !== '' && password && password.value !== ''){

        x.innerHTML = `Bienvenido de nuevo ${nickname.value}!` 

        localStorage.setItem('nn', nickname.value);

        setTimeout(function(){ x.className = x.className.replace("show", ""); window.location.href='index.html'}, 1700);
    }
    else{
        console.log('nel');
        x.innerHTML = `Por favor rellene los campos`;
        setTimeout(function(){ x.className = x.className.replace("show", "");}, 1700);
    }
    x.className = "snackbar show";
}

function handleRegister(){
    var x = document.getElementById("snackbar");
    if(nickname && nickname.value !== '' && email && email.value !== '' && password && password.value !== ''){

        x.innerHTML = `¡Registro exitoso!`;

        setTimeout(function(){ x.className = x.className.replace("show", ""); window.location.href='login.html'}, 1700);
    }
    else{
        console.log('nel');
        x.innerHTML = `Por favor rellene los campos`;
        setTimeout(function(){ x.className = x.className.replace("show", "");}, 1700);
    }
    x.className = "snackbar show";
}

function goToIndex(){
    window.location.href = 'index.html';
}

function goToLogin(){
    window.location.href = 'login.html';
}



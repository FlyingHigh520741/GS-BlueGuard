function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white.png";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white.png";
    }
}

function entrar(event) {

    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "1234" && senha === "1234") {
        alert("logado com sucesso");
        window.location.href = '../index.html';

    }
    else {
        alert("Usuário ou senha inválidos");
    }
}

function voltar(){
    window.location.href = '../index.html'
}
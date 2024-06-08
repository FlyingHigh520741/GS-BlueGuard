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
    event.preventDefault(); 
  
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
  
    if (login === "1234" && senha === "1234") {
      alert("Logado com sucesso");
      window.location.href = '../index.html';
    } else {
      alert("Usuário ou senha inválidos");
    }
  }
  

function voltar(){
    window.location.href = '../index.html'
}

/*CARROSSEL*/ 
const box = document.querySelector(".container3");
const imagens = document.querySelectorAll(".container3 img");

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 1500}px)`;
}

setInterval(slider, 2000);
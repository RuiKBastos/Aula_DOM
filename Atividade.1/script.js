const nome = document.querySelector("#nome");

const botao = document.querySelector("#btnEntrar");

const resultado = document.querySelector("#resultado");

botao.addEventListener("click", function() {

    const nomeDigitado = nome.value;

    resultado.textContent =
        `Olá,${nomeDigitado}! Seja bem-vindo ao SENAI C.O.!`;

});
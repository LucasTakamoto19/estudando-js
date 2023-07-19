const buttonRed = document.querySelector("#red");
const buttonYell = document.querySelector("#yellow");
const buttonGreen = document.querySelector("#green");
const buttonAuto = document.querySelector("#automatic");
const semaforo = document.querySelector("#semaforo");

const imagens = [
    "img/vermelho.png",
    "img/amarelo.png",
    "img/verde.png",
];

let indice = 1;
let interval;

buttonGreen.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[2];
});

buttonYell.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[1];
});

buttonRed.addEventListener("click", () => {
    clearInterval(interval);
    semaforo.src = imagens[0];
});

buttonAuto.addEventListener("click", () =>{
    interval = setInterval(() => {
        semaforo.src = imagens[indice];
        if (indice == (imagens.length-1)) {
            indice = 0;
        }
        else{
            indice++;
        }
    }, 1000);
})
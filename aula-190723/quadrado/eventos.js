// Eventos são ação (Clique, teclar, movimentar o cursor)
// Click => Clique do mouse
// dblclick => É o duplo clique do mouse
// kaydown => Apertar o botão
// kayup => Soltar botão
// mouseover => Moveu o ponteiro do mouse sobre o elemento
// mouseout => Moveu o ponteiro do mouse para fora do elemento
// submit => Submeter os dados de um formulário
// change => Alterar o valor de um campo de formulário
// focus => Evento acionado quando o foco está sobre o elemento


const quadrado = document.querySelector("#quadrado");
console.log({quadrado});

quadrado.onclick = () => { // Primeira forma de adicionar um "ouvidor de evento"
    quadrado.style.backgroundColor = "#003049";
    // quadrado.style.borderRadius = "100px";
    quadrado.style.transform = "translateY(200px)"
}

quadrado.ondblclick = () => {
    // quadrado.style.borderRadius = "0";
    quadrado.style.transform = "translateY(0)"
    quadrado.style.backgroundColor =  "#0d63cb";
}

function changeColorSquare(){  // Esta função está sendo chamada no HTML
    quadrado.style.backgroundColor = "#219ebc";
}

quadrado.addEventListener("mouseout", () => { // Terceira forma de adicionar um "ouvidor de evento"
    quadrado.style.backgroundColor = "#f07167";
});
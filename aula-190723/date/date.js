// Date => Data é objeto que facilita o uso de data com JavaScript

let data = new Date(); // Criar um objeto com base no tempo do sistema
console.log(data.toLocaleDateString());
console.log(data.toLocaleTimeString());

// Date.now();
let agora = Date.now(); // Date.now cria a data e hora atual em milisegundos
console.log(agora);

// Data/Hora +10 min
let dezMin = 1000 * 60 * 10;
let soma = agora + dezMin;
console.log(new Date(agora));
console.log(new Date(soma));

// Ano, mês, dia 
console.log(new Date(2022, 6, 18));



// Chamar o botão
const btn = document.querySelector("#enviar");

btn.addEventListener("click", () => {
    const dataCampo = document.querySelector("#dataNasc");
    const valor = dataCampo.value;
    const vetorData = valor.split("-").map(n => Number(n));
    const data = new Date(vetorData[0], vetorData[1]-1, vetorData[2]);
    window.alert(data); // Caixa flutuante 
});
// Vetores - Arrays

let nota = 9.6; // Variavel Simples
let notas = [6.5, 7.8, 9.0]; // Variavel Composta
let times = ["Corinthians", "Barcelona", "Manchester City", "Milan"];
let ativados = [true, false, false, true];

// console.log(typeof nota); // number
// console.log(typeof notas); // object
// console.log(notas.length); // tamanho do vetor

let pesos = [89.5, 60.0, 45.4, 67.0, 75.3]; // estrutura indexada => baseada no indice 
// console.log(pesos.length);
// console.log(pesos[pesos.length-1]); // indice => número que representa a posição do elemento, onde começa de "0"
// console.log(pesos[0] + pesos[1]);
console.log(pesos);

// // Imprimindo com for 
// for (let i = 0; i < pesos.length; i++) { 
//     console.log(pesos[i]); // intera sobre o vetor
// }

// Vetor de funções
let operacoes = [
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 / n2
]

// Mudando um número do vetor
pesos[2] = 54.4;
console.log(pesos);

// Multiplicando por 2 cada número 
// for (let i = 0; i < pesos.length; i++) { 
//     pesos[i] *= 2;
// }
// console.log(pesos);

// Somar e multiplicar todos por 2
// let acumulador = 0;
// for (let i = 0; i < pesos.length; i++) { 
//     acumulador += pesos[i];
// }
// console.log(acumulador * 2);


// for each

// Valores
for(let peso of pesos){
    console.log(peso);
}

// Indice
for(let indice in pesos){
    console.log(indice);
    console.log(pesos[indice]);
}
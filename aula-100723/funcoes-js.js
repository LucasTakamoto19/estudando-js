// Função ou Function => Rotina

// let num1 = 6;
// let num2 = 4;
// function multiplicar() {
//     console.log("O primeiro número é " + num1);
//     console.log("O segundo número é " + num2);
//     console.log("O produto é " + (num1 * num2));
// }

// multiplicar(); // Fez a chamada da função

// Number => Biblioteca
let result = Number.isNaN(NaN); // true ou false
console.log(result);

result = Number.isFinite(Infinity); // true ou false
console.log(result);

result = Number.parseInt(12.4); // conversão do float para int
console.log(result);

result = Number.parseFloat(12); // conversão do int para float
console.log(result);

result = Number.isInteger(13.4); // inteiro (true/false)
console.log(result);

let numero = 22.548;
console.log(numero.toFixed(2));
console.log(numero.toFixed(1));

console.log(numero.toPrecision(4));

console.log(numero.toString());

numero = numero.toString();
console.log(numero);

// Funções de Texto

const texto = "JavaScript";

console.log(texto.charAt(9)); // Imprime o caractere na posição 9

console.log(texto.concat(" é muito bacana.")); // Concatena JavaScript com texto

console.log(texto.charAt(texto.length-1)); // Imprime o último caractere

console.log(texto.trim()); // Remove espaços do fim e do inicio do texto

console.log(texto.replaceAll(" ", ""));

console.log(numero.replace(".", ","));

console.log(texto.includes("Java")); // Considera maiuscula e minuscula


let busca = "JaVa";
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

console.log(texto.toLowerCase().includes(busca.toLowerCase())); // Não considera maiuscula e minuscula

console.log(texto.replace("J" , "A").replace("S", "T").replace("H", "A")); // Funciona perfeitamente

console.log(texto.indexOf("9"));



// Math => Biblioteca Matemática
console.log(Math.ceil(2.3789)); // Arredonda para cima
console.log(Math.floor(2.3789)); // Arredonda para baixo
console.log(Math.round(2.7389)); // Arrendonda para o mais proximo
console.log(Math.sqrt(625));
console.log(Math.abs(-8));
console.log(Math.floor(Math.random() * 100 + 1)) ; // [0, 1[
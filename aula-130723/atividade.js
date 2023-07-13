// Crie uma função que calcule o valor médio de três números, considerando que esses teram pesos 2, 3, 4 respectivamente.
function mediaPonderada(n1, n2, n3) {
    return ((n1*2 + n2*3 + n3*4) / 9);
}
console.log("Media ponderada entre 6, 7, 8 é "+ mediaPonderada(6, 7, 8));

// Crie uma função que receba um número inteiro e retorne a quantidade de divisores desse número.
function numDivisores(num) {
    let qnt = 0;
    for(let i = 2; i < num; i++) {
        if(num % i == 0) {
            qnt++;
        }
    }
    return qnt;
}
console.log("A quantidade de divisores de 78 é " + numDivisores(78));

// Crie uma função que calcule a soma de todos os dígitos de um número.
function numDigitos(num) {
    let numTexto = num.toString();
    let acumulador = 0;
    for(let i = 0; i < numTexto.length; i++) {
        acumulador += parseInt(numTexto.charAt(i));
    }
    return acumulador;
}
console.log("A soma dos digitos de 4629 é " + numDigitos(4629));


// Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em ordem inversa.
function reverterPalavra(palavra) {
    for (let i = palavra.length-1; i >= 0; i++) {
        palavraRevertido += palavra.charAt(i);
    }
    return palavraRevertido;
}
console.log("'Segue o lider' é revertido assim " + reverterPalavra("Segue o lider"));

// Crie uma função que receba os valores de comprimento e tempo e retorne a velocidade média.
function velocidadeMedia(comprimento, tempo){
    return (comprimento / tempo);
}
console.log("A velocidade de uma motoca  que percorreu 50km em 1h é " + velocidadeMedia(50, 1) + "km/h");

// Crie uma função que receba uma string e retorne outra string com todas as vogais removidas.
function isVogal(char){
    switch (char.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
    }
    return false;
}

function removeVogal(texto) {
    let textoSemVogal = "";
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i);
        if (!isVogal(char)) {
            textoSemVogal += char;
        }
    }
    return textoSemVogal;
}
console.log("'JavaScript' sem as vogais é " + removeVogal("JavaScript"));

// Crie uma função que receba um receba um número no sistema decimal e retorne o mesmo número no sistema binário.
function converterrDecimalBinario(num) {
    let divisao = num;
    let numBinario = "";
    for (;;) {
        if (divisao <= 0) {
            break;
        }
        let resto = num % 2;
        divisao = parseInt(divisao / 2);
        numBinario = resto + numBinario;
    }
    return numBinario;
}

console.log(converterrDecimalBinario(25));

// let num = 2;
// console.log(num.toString(10));
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));

// Crie uma função que receba um número e uma outra função e execute essa de acordo com número informado.
function repetir(callback, interation) {
    for (let i = 0; i < interation; i++) {
        callback(i);
    }
}
repetir((index) => console.log("Reoetição #" + (index+1)),10);
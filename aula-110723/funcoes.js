// Função
// Funções que recebem parametos
// Funções que não recebem parametros
// Funções que retornam valores
// Funções que não retornam valores

// function somar(n1, n2 = 10) {
//     let soma = n1 + n2;
//     return soma;
// }

// let result = somar(30, 17);
// console.log(result);

function calc(n1, n2, op = "+") {
    switch (op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2; 
        case "*":
            return n1 * n2;
        case "/":
            return n1 / n2;
    }
    return NaN;
}

console.log(calc(80, 6));
console.log(calc(56, -12, "-"));
console.log(calc(-56, 0, "*"));
console.log(calc(18,2, "somar"));


// Entrada
// Processamento
// Saída

function desenhaTriangulo(altura) {
    for(let i = 1; i <= altura; i++){
        let linha = "";
        for (let j = 0; j < (altura-i); j++) {
            linha += " ";
        }
        for (let j = 0; j < i; j++) {
            linha += "* ";
        }
        console.log(linha);
    }
}

desenhaTriangulo(10);
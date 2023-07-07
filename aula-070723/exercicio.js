// Números de 1 a 20
// for (let numero = 1; numero <= 20; numero++) {
//     console.log(numero);
// }

// Fibonacci
// let i = 0;
// let p = 1;
// let u = 0;
// while (i < 10) {
//     let soma = p + u;
//     console.log(soma);
//     p = u;
//     u  = soma;
//     i++;
// }

// Soma de números impares
// for(let i = 1; i <= 10; i++){
//     if (i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }


// Tabuada
// let num1 = 5;
// for (let i = 1; i < 10 ; i++) {
//     console.log(num1 + " + " + i + " = " + (num1+i));
// }


// Multiplo de 7 de 1 a 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 == 0 && (i !=7)) {
//         continue;
//     }
//     console.log(i);
// }

// Triangulo
// let lado = 5;
// let altura = 2;
// let linha = "";
// for (let i = 0; i < lado; i++) {
//     linha += "#";
//     for (let j = 0; j < altura; j++) {
//         console.log(linha);
//     }
// }

// Forma um quadrado
// linha = "";
// for (let i = 0; i < altura; i++) {
//     console.log(linha);
// }

// Desenhar um quadrado com @, mas seu interior deve ser oco.
let lado = 5;
let linha = "";
for (let y = 0; y < lado; y++) {
    linha = "";
    for (let x = 0; x < lado; x++) {
        if (y == 1 || y == lado || x == 1 || x == lado) {
            linha += "@ ";
        }
        else{
            linha += " ";
        }
    }
    console.log(linha);
}
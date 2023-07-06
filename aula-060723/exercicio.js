// Negativo, positivo, zero

// let num = -1;
// if (num < 0) {
//     console.log("Número negativo");
// }
// else if(num == 0){
//     console.log("Número igual a zero");
// }
// else{
//     console.log("Número positivo");
// }

// Maior de idade

// let idade = 16;
// if (idade > 18) {
//     console.log("Maior de idade, acima dos 18 anos");
// }
// else if (idade >= 18){
//     console.log("Maior de idade")
// }
// else{
//     console.log("Menor de idade");
// }

// Número maior

// let num1 = 10;
// let num2 = 15;
// let num3 = 20;
// if (num1 > num2 && num1 > num3) {
//     console.log("Maior numero é: " + num1);
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("Maior numero é: " + num2);
// }
// else if(num3 > num1 && num3 > num2){
//     console.log("Maior numero é: " + num3);
// }
// else{
//     console.log("Está duplicado");
// }

// Par ou impar

// let num1 = 7;
// let num2 = 3;
// let produto = num1 * num2;
// if (produto % 2 == 0) {
//     console.log(produto + " é par");
// }
// else{
//     console.log(produto + "é impar");
// }

// Dia da semana

// let dia = "segunda-feira";
// if (dia == "segunda-feira" ||"terca-feira" ||"quarta-feira" ||"quinta-feira" ||"sexta-feira" ) {
//     console.log(dia + "dia útil");
// }
// else if (dia == "domingo" || dia == "sabado") {
//     console.log(dia + "final de semana");
// }
// else{
//     console.log("Inválido");
// }

// Dia da semana

let diaNum = 0;
switch (diaNum) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido.");
}


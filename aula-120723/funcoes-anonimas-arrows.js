function somar(n1, n2) { // Entrada
    let soma = n1 + n2; // Processamento
    return soma; // Saída
}

// function dividir(num, den) {
//     if(den == 0)
//         return; // Retorno vazio é válido
//     return (num / den);
// }

// const num = dividir(22, 0);
// console.log(num);'


// function requisicaoParaBanco(callbackError) {
//     for (let i = 0; i < 1000000; i++) {
//         if (i === 1000) { // aqui gerou um erro
//             callbackError();
//         };
//     }
// }

// function erro() {
//     console.log("DEU RUIM!");
// }

// requisicaoParaBanco(erro);


// Função Anônima

// setTimeout(function(){
//     console.log("Olá, mundo");
// }, 2000);

// setInterval(function(){
//     console.log("Olá, mundo com SetInterval.")
// }, 2000);

// let funAno = function(){

// }

// function funAno(){

// }


// Arrow Functions => Funções de Seta => Funções Anônimas
// setTimeout(function(){
//     console.log("Função Anônima");
// }, 2000);

// function(){

// }

// () => {

// }

// parametros => escopo/intrução
// (resultado, requisicao) => {
//     console.log(resultado + " " + requisicao)
//     return 0;
// }


// Testando a utilização das arrow functions
function teste(callback){
    let valor= callback(130);
    console.log(valor);
}

// 1° forma de executar "teste" (Função Expression)
function vezes2(numero){
    return (numero * 2);
}
teste(vezes2);


// 2° forma de executar "teste" (Função Anonima)
teste(function(numero){
    return (numero * 2);
});


// 3° forma de executar "teste" (Função Arrow) - Modo 1
teste((numero) => {
    return (numero * 2);
});


// 4° forma de executar "teste" (Função Arrow) - Modo 2
teste(numero =>(numero * 2)); // pode-se omitir o "return" e as { } qnd há apenas uma instrução

// setTimeout(() => console.log("Olá, mundo"), 3000); // _ == () utiliza-se qnd não há parametros

// Recursividade => Chamada de uma função pela mesma função

function fatorial(numero){
    if (numero == 1) {
        return 1;
    }
    return numero * fatorial(numero - 1);
}

console.log(fatorial(4));
console.log(fatorial(6));
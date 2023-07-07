/*
// Uma quantidade determinada de repetições
for(inicializacao; condicao; incrementacao){
    // repeticao...
}

// Uma quantidade indeterminada de repetições
while(condicao) {
    // repeticao ...
}
*/

// console.log("TESTE 1");
// console.log("TESTE 2");


// Desenhe um quadradro de # na tela
let lado =  5;
let linha = "";
// for(let i = 0; i < 4; i++){
//     let linha = ""
//     for (let j = 0; j < lado; j++) {
//         linha += "# ";
//     }
//     console.log(linha);
// }

// for (let i = 0; i < lado; i++) {
//     linha += "# ";
// }
// for (let i = 0; i < lado; i++) {
//     console.log(linha);
// }

// Break e continue
// Ignoraa todos os impares
// for(let i = 1; i <= 20; i++){
//     if(!(i % 2 == 0)){
//         continue; // Pula o loop
//     }
//     console.log(i)
// }

// Imprime o primeiro numero multiplo de 8
for(let i = 1; i <= 100; i++){
    if(i % 8 == 0 && (i != 8)){
        console.log(i);
        break;
    }
}
// class Pessoa {
//     nome;
//     idade;
//     email;
// }

// let pessoa1 = new Pessoa();

// pessoa1.nome = "Lucas";
// pessoa1.idade = 21;
// pessoa1.email = "lucas.takamoto@hotmail.com";

// console.log(pessoa1);


// const pessoa2 = {
//     nome: "Messi", // chave: valor
//     idade: 34, 
//     email: "messi@gmail.com",
//     foto: "https://bancodefutebol.com/754874521",
//     enabled: true
// };

// console.log(pessoa2);



const pc = {
    ram: 16,
    disco: 1,
    processador: "i9 intel",
    fonte: "750W",
    placaMae: "GigaByte"
};

const saldo = 4500;

if (saldo > 4000) {
    pc.placaVideo = "RXT 3080";
}

// console.log(pc); 

let n1 = 2;
let n2 = n1;
n1 = 3;
console.log(n1);
console.log(n2);

// Forma incorreta de copiar um objeto





// Forma correta de copiar um objeto -> Operador spread
// Spread faz a copia de um objeto
let objeto1 = {nome: "Lucas", curso: "Java Full Stack" };
let objeto2 = {...objeto1};
objeto1.nome = "Lucas Yuki";
console.log(objeto1);
console.log(objeto2);

delete objeto1.nome;
console.log(objeto1);
const nums =  [6, 9, 0, 3, 7, 1, 4, 8, 8, 5];
console.log(nums);  

nums.push(2); // adiciona um elemento ao final do vetor
console.log(nums);

nums.unshift(10); // adiciona um elemento no inicio do vetor
console.log(nums);

nums.pop(); // remove um elemento no final do vetor
console.log(nums);

nums.shift();
console.log(nums); //remove um elemento no inicio do vetor

let juncao = nums.join(", "); // função join faz a junção dos elementos do vetor
console.log(juncao);

let vetor2 = [5, 6, 7];
let vetor3 = nums.concat(vetor2); // gera um novo vetor concatenado
console.log(vetor3);

// const nomes = ["Tanjiro", "Zenitsu", "Tomioka", "Inosuke"];
// console.log(nomes.sort()); // ordena o vetor na ordem alfabetica e o sort modifica o vetor também

console.log(nums.reverse()); // gera novo vetor e reverte a ordem dos elementos e modifica o vetor

console.log(nums.includes(10)); // retorna um boolean 

// console.log(nums.fill(0)); // preenche todos elementos com 0
// console.log(nums.fill(7, 2, 4)); // preencher com 7 de 2 a 4-1

console.log(nums.indexOf(9)); // retorna um indice do primeiro elemento do vetor

console.log(nums.splice(6, 3)) // remove elementos do meio do vetor
console.log(nums);

console.log(nums.slice(2, 4)); // recorta um vetor do indice 2 a 5-1 (não modifica)

nums.forEach(num => console.log(num)); // intera sobre os elementos do vetor

console.log(nums.reduce((acumulador, num) => (acumulador - num), 0));

console.log("-------------------");

console.log(nums.map(num => num * 2)); // multiplica todos valores por 2 e gera um novo vetor

console.log("-------------------");

console.log(nums.find(num => (num > 8))); // retorna o primeiro valor que corresponde a condição especifica

console.log(nums.filter(num =>( num > 8))); // retorna um vetor com elementos que corresponde a condição

console.log("-------------------");

let nome = `Lucas Yuki`;
let idade = 21;
let msg = `Nome: ${nome} Idade: ${idade}`
console.log(nome[2]); // perfeitamente válido => retorna "c"
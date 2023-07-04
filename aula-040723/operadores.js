// Operadores Aritméticos => +, -, *, /, **, %

let result;

// result = 4 + 5; // 9
// console.log(result);

// result = 9 * 3; // 27
// console.log(result);

// result = ((3 + 7) * 12 ) / 6; // 20
// console.log(result);

// Operadores de Atribuição (=, +=, -=, *=, **=, %=)
// result = result + 30
// result = result + 30;
// console.log(result); // 50

// result -= 45;
// console.log(result);

// result *= 7;
// console.log(result); // 35

// result %= 9;
// console.log(result); // 8

// result /= 2;
// console.log(result); // 4

// result **= 2;
// console.log(result); // 16

// Operadores Incremento e Decremento
/*
    a++ => Pós Incremento
    ++a => Pré Incremento
    a-- => Pós Decremento
    --a => Pré Decremento
*/

// let a = 0;
// console.log(a); // 0

// console.log(a++); // 0

// console.log(++a); // 2

// console.log(--a); // 1

// console.log(a--); // 1

// Operadores Relacionais (true, false => boolean)

/*
    <   Menor que 
    >   Maior que
    <=  Menor ou igual
    >=  Maior ou igual
    ==  Igual a
    === Igual a e mesmo tipo
    !=  Diferente
*/

// const n1 = 9;
// const n2 = 11;
// const n3 = 9;
// const n4 = 13;
// const n5 = "11";

// result = n1 < n2;
// console.log(result); // true

// result = n1 > n2;
// console.log(result); // false

// result = n1 <= n2;
// console.log(result); // true

// result = n1 <= n3;
// console.log(result); // true

// result = n1 >= n3;
// console.log(result); // true

// result = n1 > n3;
// console.log(result); // false

// result = n3 == n4;
// console.log(result); // false

// result = n1 == n3;
// console.log(result); // true

// result = n1 != n3;
// console.log(result); // false

// result = n1 != n4;
// console.log(result); // true

// result = n2 === n5;
// console.log(result); // false

// result = "Lucas" == "Lucas"
// console.log(result); // true

// result = "Lucas Yuki" == "Lucas Braga"
// console.log(result); // false

// result = 3.14 == 3;
// console.log(result); // false

// Operados Lógicos
/*
    && => E
    || => OU
    ! => NÃO
*/

// console.log(true);
// console.log(false);

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(true && true && true && false); // false
// console.log(false && true); // false

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(true || true || true || false); //true
// console.log(false || false); // false

// console.log(!true); // false
// console.log(!false); // true
// console.log(!true || false); // false
// console.log(true || true && false); 

// // Dada a idade, a pessoa é obrigada a votar?
// let idade = 23;
// let calculo = (idade >= 18) && (idade <= 65);
// console.log(calculo);

// Operador Ternário
// condição ? caso for verdadeiro : caso for falso;
let mensagem;
let nota1 = 10;
let nota2 = 4;
let condicao = ((nota1 + nota2) / 2) >= 7;

mensagem = condicao ? "Aprovado" : "Reprovado"
console.log(mensagem);

// Ariméticos > relacionais > lógicos
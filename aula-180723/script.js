// window.document => representa o documento HTML
// document.getElementById(); => ele busca pelo id do elemento
// document.getElementsByClassName(); => ele busca todos os elementos por class
// document.getElementsByTagName(); => ele busca todos elementos que estão em negrito
// document.querySelector(); => ele busca do elemento com base no seu seletor CSS

// window.document.getElementById();
let h1 = document.getElementById("titulo");// é muito utilizado antes
// let paragrafo = document.getElementsByClassName("paragrafo");
let negritos = document.getElementsByTagName("b");
let campoEmail = document.querySelector("input[type-email]");
let negritoParagrafo = document.querySelector("p b"); // Muito aplicado
let negritosParagrafo = document.querySelectorAll("p b"); // Muito aplicado

// titulo.align = "center";
// titulo.title = "Titulo Principal";
// titulo.style.color = "purple";
// titulo.style.fontSize = "50px";


let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Hoje na aula de <b>JavaScript</b> abordamos o tema DOM. Um tema super legal, com muito aprendizado"
// console.log(paragrafo.innerText); // traz o conteudo textual do elemento
// console.log(paragrafo.innerHTML); // traz o conteudo textual + html do elemento


// Uso de classes com JavaScript
let caixa = document.querySelector('#informe');
caixa.classList.add("erro"); // Adiciona uma nova classe
caixa.classList.remove("mensagem"); // Remove uma classe

caixa.classList.toggle("atencao"); // Adiciona se não existe
caixa.classList.toggle("atencao"); // Remove se existir
console.log(caixa);

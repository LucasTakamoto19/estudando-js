const email = document.querySelector("#email");
const campos = document.querySelectorAll("input, textarea");
console.log(campos);

function validarEmail() {
    const valor = email.value; // captura o valor digitado no campo 
    if (valor.includes('@')) {
        email.style.borderColor = "green";
    }
    else{
        email.style.borderColor = "red";
    }
}

function validarCampoVazio2(evento) { // Event
    const campo = evento.target; // Objeto target representa o elemnto que acionou o evento
    const valor = campo.value;
    if(valor == ""){
        campo.style.borderColor = "red";
    }
    else{
        campo.style.borderColor = "#767676";
    } 
}

// email.addEventListener("keyup", validarEmail); // Verifica o email a cada botão pressionado no teclado

// for (let campo of campos) {
//     campo.addEventListener("change", validarCampoVazio);
// }

for (let campo of campos) {
    campo.addEventListener("blur", validarCampoVazio2); //blur => Evento perde o foco
}
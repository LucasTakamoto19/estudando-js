const vetor = [
    {
        id: 1,
        descricao: "Back-End",
        prioridade: "Média",
        status: "Pendente",
        prazo: new Date(2023, 7-1, 21, 12, 0)
    },

    {
        id: 2,
        descricao: "Banco de dados",
        prioridade: "Alto",
        status: "Pendente",
        prazo: new Date(2023, 9-1, 30, 14, 30)
    },

    {
        id: 3,
        descricao: "Front-end",
        prioridade: "Alta",
        status: "Pendente",
        prazo: new Date(2023, 7-1, 21, 12, 0)
    },
];

function inicializaTabela(tarefas){
    const tabela = document.querySelector("#table-tarefas");
    tabela.innerHTML = "";
    for(let tarefa of tarefas){
        const dataFortada = tarefa.prazo.toLocaleDateString() + " " + tarefa.prazo.toLocaleTimeString();
        tabela.innerHTML += `
            <tr>
                <td>${tarefa.descricao}</td>
                <td>${tarefa.prioridade}</td>
                <td>${tarefa.status}</td>
                <td>${tarefa.prazo}</td>
                <td><button data-tarefa="${tarefa.id}" class="btn-delete">Apagar</button></td>
                <td>
                <input type="checkbox" data-tarefa="${tarefa.id} class="check-conc1"</td>
            </tr>
        `;
    }
    iniciarConfig();
}

function iniciarConfig(){
    const btnsDel = document.querySelectorAll(".btn-delete");
    for(let btn of btnsDel){
        const id = btn.dataset.tarefa;
        btn.addEventListener("click", (event) => {
            const btncClicked = event.target;
            const id = btncClicked.dataset.tarefa;
            removerTarefa(id);
            inicializaTabela(vetor);
        });
    }

     // Check Box Concluido
    const checks = document.querySelectorAll(".check-conc1");
    for(let check of checks){
        check.addEventListener("change", (event) =>{
            const checkClicked = event.target;
            const id =checkClicked.dataset.tarefa;
            if(checkClicked.checked){
                marcarConcluido(id);
            }
            else{
                marcarPendente(id);
            }
            inicializaTabela(vetor);
        });
    }
}

function removerTarefa(id) {
    let indice;
    for (let index in vetor) {
        if(vetor[index].id == id){
            indice = index;
        }
    }
    vetor.splice(indice, 1); // Remove o obj do vetor
}

function checkConcluido(id){
    let indice;
    for (let tarefa of vetor) {
        if(tarefa.id == id){
            tarefa.status = "Concluido";
        }
    }
}

function checkPendente(id){
    for (let tarefa of vetor) {
        if(tarefa.id == id){
            tarefa.status = "Pendente";
        }
    }
}

function dadosForm(){
    const descricao = document.querySelector("#descricao").value;
    const status = document.querySelector("#status").value;
    const prioridade = document.querySelector("#prioridade").value;
    const prazo = document.querySelector("#prazo").value;
    const hora = document.querySelector("#hora").value;
    const objeto = {
        descricao,
        status,
        prioridade,
        prazo
    };
    return objeto;
}

function formataData(dataString, horaString){
    const dataVetor = dataString.split("-").map(n => Number(n));
    const horaVetor = horaString.split(":").map(n => Number(n));
    return new Date(data[0], data[1]-1, data[2], hora[0], hora[1]);
}

const btnEnviar = document.querySelector("#form-tarefa");
btnEnviar.addEventListener("submit", (event) => {
    event.preventDefault(); // cancela o evento padrão
    dadosForm();
});

inicializaTabela(vetor);

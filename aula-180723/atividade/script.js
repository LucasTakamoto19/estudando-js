const alunos = [
    {
        nome: "Marcus Oliveira",
        idade: 18,
        nota: 7.5
    },

    {
        nome: "Mariana Rosa",
        idade: 20,
        nota: 10.0
    },

    {
        nome: "Luan Guilherme",
        idade: 25,
        nota: 6.7
    },

    {
        nome: "Pedro Sampaio",
        idade: 22,
        nota: 7.0
    },

    {
        nome: "Ricardo Feitosa",
        idade: 19,
        nota: 8.7
    },

    {
        nome: "Marcela Rodrigues",
        idade: 18,
        nota: 7.2
    },

    {
        nome: "Carlos Alberto",
        idade: 23,
        nota: 8.1
    },

    {
        nome: "Beatriz Oliver",
        idade: 19,
        nota: 6.9
    }
];

function inicializaTabela(){
    const tabela = document.querySelector("#tabela-aluno");
    for(let aluno of alunos){
        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.nota}</td>
            </tr>
        `;
    }
}

inicializaTabela();
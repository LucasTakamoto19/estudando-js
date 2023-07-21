import { tabelaLivros } from "./livros.js"; 

function exibirLivros(tabelaLivros){
    const tabela = document.querySelector("#table-content");
    tabela.innerHTML = "";
    for(let tabelaLivro of tabelaLivros){
        tabela.innerHTML += `
            <tr>
                <td>${tabelaLivro.titulo}</td>
                <td>${tabelaLivro.ano}</td>
                <td>${tabelaLivro.genero}</td>
                <td>${tabelaLivro.autor}</td>
            </tr>
        `;
    }
}

exibirLivros(tabelaLivros);
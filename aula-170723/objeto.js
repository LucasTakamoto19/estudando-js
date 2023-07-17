// Objeto => é uma estrutura que representa um objeto do mundo real. (Ex: produto, pessoa, profissão)
// Objetp pode ser modelado, em que podemos chamar de "Classe"


// Objeto => é uma estrutura que representa um objeto do mundo real no nosso código
// Instância é o processo de construir o objeto
// Classe => É uma planta ou modelo do objeto
// Construtores é a função que gere o objeto fisico
// Caracteristica são atributos/propriedades, métodos/funções

class Livro{
    titulo;
    paginas;
    autor;
    volume;
    isbn;
    alugar = function () {
        console.log("Alugado!")
    };

    // Construtores
    constructor(titulo, paginas, autor, isbn){
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.isbn = isbn;
    }
}


// Para criar a estrutura "fisica" do objeto pela classe é necessario fazer uma INSTÂNCIA
let arquiteturaLimpa = new Livro("", "", "", ""); // Instanância do objeto Livro
// console.log(arquiteturaLimpa);

arquiteturaLimpa.titulo = "Arquitetura Limpa";
arquiteturaLimpa.paginas = 400;
arquiteturaLimpa.autor = "Mauricio de Souza";
arquiteturaLimpa.volume = "16";
arquiteturaLimpa.isbn = "978-85-508-0460-6";

// console.log(arquiteturaLimpa);
// arquiteturaLimpa.alugar();



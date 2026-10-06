const botaoIniciar = document.querySelector('#iniciar');

const inicio = document.querySelector('#inicio');

const quiz = document.querySelector('#quiz');

const resultado = document.querySelector('#resultado');

const perfil = document.querySelector('#perfil');

const descricaoPerfil = document.querySelector('#descricao-perfil');

const numeroPergunta = document.querySelector('#numero-pergunta');

const respostas = document.querySelectorAll('.resposta');

const capaLivro = document.querySelector('#capa-livro');

const nomeLivro = document.querySelector('#nome-livro');

const autorLivro = document.querySelector('#autor-livro');

const botaoSortear = document.querySelector('#sortear');


let perguntaAtual = 0;

let pontos = [0, 0, 0];

let perfilAtual = 0;


/* PERGUNTAS */

const perguntas = [

    {
        pergunta: 'Qual história você escolheria?',

        respostas: [
            'Uma história de amor',
            'Uma aventura fantástica',
            'Um grande mistério'
        ]
    },


    {
        pergunta: 'O que mais chama sua atenção em um livro?',

        respostas: [
            'Os sentimentos dos personagens',
            'Os lugares e aventuras',
            'Os segredos da história'
        ]
    },


    {
        pergunta: 'Qual cenário você escolheria?',

        respostas: [
            'Uma cidade romântica',
            'Um mundo mágico',
            'Uma casa cheia de mistérios'
        ]
    },


    {
        pergunta: 'Qual personagem você seria?',

        respostas: [
            'Uma pessoa apaixonada',
            'Um grande aventureiro',
            'Um detetive'
        ]
    },


    {
        pergunta: 'Como você gosta de terminar um livro?',

        respostas: [
            'Com o coração quentinho',
            'Com vontade de viver uma aventura',
            'Surpreso com a descoberta'
        ]
    }

];


/* PERFIS */

const perfis = [

    {
        nome: 'Leitor Romântico',

        descricao:
        'Você gosta de histórias cheias de sentimentos, emoções e romances.',

        livros: [

            {
                nome: 'É Assim que Acaba',

                autor: 'Colleen Hoover',

                capa: 'livro1.jpg'
            },


            {
                nome: 'Orgulho e Preconceito',

                autor: 'Jane Austen',

                capa: 'livro2.jpg'
            },


            {
                nome: 'A Culpa é das Estrelas',

                autor: 'John Green',

                capa: 'livro3.jpg'
            }

        ]
    },


    {
        nome: 'Leitor Aventureiro',

        descricao:
        'Você gosta de aventuras, descobertas e histórias que levam sua imaginação para outros mundos.',

        livros: [

            {
                nome: 'Harry Potter',

                autor: 'J. K. Rowling',

                capa: 'livro4.jpg'
            },


            {
                nome: 'O Hobbit',

                autor: 'J. R. R. Tolkien',

                capa: 'livro5.jpg'
            },


            {
                nome: 'Percy Jackson',

                autor: 'Rick Riordan',

                capa: 'livro6.jpg'
            }

        ]
    },


    {
        nome: 'Leitor Misterioso',

        descricao:
        'Você gosta de mistérios, pistas e histórias que fazem você tentar descobrir o final.',

        livros: [

            {
                nome: 'Sherlock Holmes',

                autor: 'Arthur Conan Doyle',

                capa: 'livro7.jpg'
            },


            {
                nome: 'O Assassinato no Expresso do Oriente',

                autor: 'Agatha Christie',

                capa: 'livro8.jpg'
            },


            {
                nome: 'Coraline',

                autor: 'Neil Gaiman',

                capa: 'livro9.jpg'
            }

        ]
    }

];


/* COMEÇAR O QUIZ */

botaoIniciar.onclick = function() {

    inicio.style.display = 'none';

    quiz.style.display = 'block';

    resultado.style.display = 'none';

    perguntaAtual = 0;

    pontos = [0, 0, 0];

    mostraPergunta();

};


/* MOSTRAR PERGUNTA */

function mostraPergunta() {

    numeroPergunta.textContent =
        (perguntaAtual + 1) +
        '. ' +
        perguntas[perguntaAtual].pergunta;


    for (let i = 0; i < respostas.length; i++) {

        respostas[i].textContent =
            String.fromCharCode(65 + i) +
            '. ' +
            perguntas[perguntaAtual].respostas[i];

    }

}


/* ESCOLHER RESPOSTA */

for (let i = 0; i < respostas.length; i++) {

    respostas[i].onclick = function() {

        pontos[i]++;

        perguntaAtual++;


        if (perguntaAtual < perguntas.length) {

            mostraPergunta();

        } else {

            mostraResultado();

        }

    };

}


/* MOSTRAR RESULTADO */

function mostraResultado() {

    let maiorPontuacao =
        Math.max(...pontos);


    perfilAtual =
        pontos.indexOf(maiorPontuacao);


    quiz.style.display = 'none';

    resultado.style.display = 'block';


    perfil.textContent =
        perfis[perfilAtual].nome;


    descricaoPerfil.textContent =
        perfis[perfilAtual].descricao;


    botaoSortear.style.display = 'block';


    sortearLivro();

}


/* SORTEAR LIVRO */

function sortearLivro() {

    let livros =
        perfis[perfilAtual].livros;


    let numeroAleatorio =
        Math.floor(
            Math.random() * livros.length
        );


    let livroEscolhido =
        livros[numeroAleatorio];


    capaLivro.src =
        livroEscolhido.capa;


    capaLivro.alt =
        'Capa de ' +
        livroEscolhido.nome;


    nomeLivro.textContent =
        livroEscolhido.nome;


    autorLivro.textContent =
        livroEscolhido.autor;

}


/* CLICAR NO BOTÃO DE SORTEAR */

botaoSortear.onclick = function() {

    sortearLivro();

};

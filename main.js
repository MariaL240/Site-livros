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

{ pergunta: 'Qual história você escolheria?', respostas: [ 'Uma história de amor', 'Uma aventura fantástica', 'Um grande mistério' ] },

{ pergunta: 'O que mais chama sua atenção em um livro?', respostas: [ 'Os sentimentos dos personagens', 'Os lugares e aventuras', 'Os segredos da história' ] },

{ pergunta: 'Qual cenário você escolheria?', respostas: [ 'Uma história cheia de romance', 'Um mundo mágico', 'Uma cidade cheia de mistérios' ] },

{ pergunta: 'Qual personagem você seria?', respostas: [ 'Uma pessoa apaixonada', 'Um grande aventureiro', 'Um investigador' ] },

{ pergunta: 'Como você gosta de terminar um livro?', respostas: [ 'Com o coração quentinho', 'Com vontade de viver uma aventura', 'Surpreso com a descoberta' ] }

];

/* PERFIS E LIVROS */

const perfis = [

{ nome: 'Leitor Romântico',

descricao: 'Você gosta de histórias cheias de sentimentos, relações e aquele romance que prende até a última página.',

livros: [

{ nome: 'Divinos Rivais', autor: 'Rebecca Ross', capa: 'book1.jpg' },

{ nome: 'Powerless', autor: 'Lauren Roberts', capa: 'book2.jpg' },

{ nome: 'Melhor do que nos filmes', autor: 'Lynn Painter', capa: 'book3.jpg' }

] },

{ nome: 'Leitor Aventureiro',

descricao: 'Sua imaginação gosta de viajar! Você prefere mundos fantásticos, aventuras e personagens que enfrentam grandes desafios.',

livros: [

{ nome: 'Powerless', autor: 'Lauren Roberts', capa: 'livro5.jpg' },

{ nome: 'A Rainha Vermelha', autor: 'Victoria Aveyard', capa: 'book4.jpg' },

{ nome: 'Era uma vez um coração partido', autor: 'Stephanie Garber', capa: 'book5.jpg' }

] },

{ nome: 'Leitor Misterioso',

descricao: 'Você gosta de pistas, segredos e reviravoltas. Quanto mais difícil for descobrir o final, melhor.',

livros: [

{ nome: 'Jogos de Herança', autor: 'Jennifer Lynn Barnes', capa: 'book6.jpg' },

{ nome: 'Manual de assassinato para boas garotas', autor: 'Holly Jackson', capa: 'book7.jpg' },

{ nome: 'O reaparecimento de Rachel Price', autor: 'Holly Jackson', capa: 'book8.jpg' }

] }

];

/* COMEÇAR */

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

numeroPergunta.textContent = (perguntaAtual + 1) + '. ' + perguntas[perguntaAtual].pergunta;

for (let i = 0; i < respostas.length; i++) {

respostas[i].textContent = String.fromCharCode(65 + i) + '. ' + perguntas[perguntaAtual].respostas[i];

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

let maiorPontuacao = Math.max(...pontos);

perfilAtual = pontos.indexOf(maiorPontuacao);

quiz.style.display = 'none';

resultado.style.display = 'block';

perfil.textContent = perfis[perfilAtual].nome;

descricaoPerfil.textContent = perfis[perfilAtual].descricao;

botaoSortear.style.display = 'block';

sortearLivro();

}

/* SORTEAR LIVRO */

function sortearLivro() {

let livros = perfis[perfilAtual].livros;

let numeroAleatorio = Math.floor( Math.random() * livros.length );

let livroEscolhido = livros[numeroAleatorio];

capaLivro.src = livroEscolhido.capa;

capaLivro.alt = 'Capa de ' + livroEscolhido.nome;

nomeLivro.textContent = livroEscolhido.nome;

autorLivro.textContent = livroEscolhido.autor;

}

/* SORTEAR NOVAMENTE */

botaoSortear.onclick = function() {

sortearLivro();

};

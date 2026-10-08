const botaoIniciar = document.getElementById("iniciar");

const inicio = document.getElementById("inicio");

const quiz = document.getElementById("quiz");

const resultado = document.getElementById("resultado");

const numeroPergunta = document.getElementById("numero-pergunta");

const perfil = document.getElementById("perfil");

const descricaoPerfil = document.getElementById("descricao-perfil");

const respostas = document.querySelectorAll(".resposta");

const capaLivro = document.getElementById("capa-livro");

const nomeLivro = document.getElementById("nome-livro");

const autorLivro = document.getElementById("autor-livro");

const botaoSortear = document.getElementById("sortear");

/* ========================= VARIÁVEIS ========================= */

let perguntaAtual = 0;

let pontos = [0, 0, 0];

let perfilAtual = 0;

/* ========================= PERGUNTAS ========================= */

const perguntas = [

{ pergunta: "Qual história você escolheria?",

respostas: [ "Uma história de amor", "Uma aventura fantástica", "Um grande mistério" ] },

{ pergunta: "O que mais chama sua atenção em um livro?",

respostas: [ "Os sentimentos dos personagens", "Os lugares e aventuras", "Os segredos da história" ] },

{ pergunta: "Qual cenário você escolheria?",

respostas: [ "Uma história cheia de romance", "Um mundo mágico", "Uma cidade cheia de mistérios" ] },

{ pergunta: "Qual personagem você seria?",

respostas: [ "Uma pessoa apaixonada", "Um grande aventureiro", "Um investigador" ] },

{ pergunta: "Como você gosta de terminar um livro?",

respostas: [ "Com o coração quentinho", "Com vontade de viver uma aventura", "Surpreso com a descoberta" ] }

];

/* ========================= PERFIS E LIVROS ========================= */

const perfis = [

{ nome: "Leitor Romântico",

descricao: "Você gosta de histórias cheias de sentimentos, relações e aquele romance que prende até a última página.",

livros: [

{ nome: "Divinos Rivais", autor: "Rebecca Ross", capa: "book1.jpg" },

{ nome: "Powerless", autor: "Lauren Roberts", capa: "book2.jpg" },

{ nome: "Melhor do que nos filmes", autor: "Lynn Painter", capa: "book3.jpg" }

] },

{ nome: "Leitor Aventureiro",

descricao: "Sua imaginação gosta de viajar! Você prefere mundos fantásticos, aventuras e personagens que enfrentam grandes desafios.",

livros: [

{ nome: "Powerless", autor: "Lauren Roberts", capa: "livro5.jpg" },

{ nome: "A Rainha Vermelha", autor: "Victoria Aveyard", capa: "book4.jpg" },

{ nome: "Era uma vez um coração partido", autor: "Stephanie Garber", capa: "book5.jpg" }

] },

{ nome: "Leitor Misterioso",

descricao: "Você gosta de pistas, segredos e reviravoltas. Quanto mais difícil for descobrir o final, melhor.",

livros: [

{ nome: "Jogos de Herança", autor: "Jennifer Lynn Barnes", capa: "book6.jpg" },

{ nome: "Manual de assassinato para boas garotas", autor: "Holly Jackson", capa: "book7.jpg" },

{ nome: "O reaparecimento de Rachel Price", autor: "Holly Jackson", capa: "book8.jpg" }

] }

];

/* ========================= MOSTRAR PERGUNTA ========================= */

function mostrarPergunta() {

const pergunta = perguntas[perguntaAtual];

numeroPergunta.textContent = (perguntaAtual + 1) + ". " + pergunta.pergunta;

for (let i = 0; i < respostas.length; i++) {

respostas[i].textContent = String.fromCharCode(65 + i) + ". " + pergunta.respostas[i];

} }

/* ========================= INICIAR ========================= */

botaoIniciar.addEventListener("click", function () {

perguntaAtual = 0;

pontos = [0, 0, 0];

inicio.style.display = "none";

quiz.style.display = "block";

resultado.style.display = "none";

mostrarPergunta();

});

/* ========================= RESPONDER ========================= */

respostas.forEach(function (botao, indice) {

botao.addEventListener("click", function () {

pontos[indice]++;

perguntaAtual++;

if (perguntaAtual < perguntas.length) {

mostrarPergunta();

} else {

mostrarResultado();

}

});

});

/* ========================= RESULTADO ========================= */

function mostrarResultado() {

const maiorPontuacao = Math.max(...pontos);

perfilAtual = pontos.indexOf(maiorPontuacao);

quiz.style.display = "none";

resultado.style.display = "block";

perfil.textContent = perfis[perfilAtual].nome;

descricaoPerfil.textContent = perfis[perfilAtual].descricao;

botaoSortear.style.display = "block";

sortearLivro();

}

/* ========================= SORTEAR LIVRO ========================= */

function sortearLivro() {

const livros = perfis[perfilAtual].livros;

const numero = Math.floor(Math.random() * livros.length);

const livro = livros[numero];

capaLivro.src = livro.capa;

capaLivro.alt = "Capa de " + livro.nome;

nomeLivro.textContent = livro.nome;

autorLivro.textContent = livro.autor;

}

/* ========================= BOTÃO SORTEAR ========================= */

botaoSortear.addEventListener("click", function () {

sortearLivro();

});

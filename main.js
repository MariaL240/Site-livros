```javascript
const inicio = document.querySelector('#inicio');
const quiz = document.querySelector('#quiz');
const resultado = document.querySelector('#resultado');

const botaoComecar = document.querySelector('#comecar');
const botaoSortear = document.querySelector('#sortear');
const botaoNovoQuiz = document.querySelector('#novo-quiz');

const numeroPergunta = document.querySelector('#numero-pergunta');
const textoPergunta = document.querySelector('#texto-pergunta');
const alternativas = document.querySelectorAll('.alternativa');

const perfil = document.querySelector('#perfil');
const descricaoPerfil = document.querySelector('#descricao-perfil');

const livro = document.querySelector('#livro');
const capaLivro = document.querySelector('#capa-livro');
const nomeLivro = document.querySelector('#nome-livro');
const autorLivro = document.querySelector('#autor-livro');
const descricaoLivro = document.querySelector('#descricao-livro');


const perguntas = [
    {
        pergunta: "Que tipo de história mais chama sua atenção?",
        respostas: [
            "Uma história de amor e sentimentos",
            "Uma aventura em um mundo diferente",
            "Um mistério cheio de pistas"
        ]
    },
    {
        pergunta: "Se você pudesse entrar em um livro, onde estaria?",
        respostas: [
            "Em uma cidade cheia de encontros românticos",
            "Em um reino mágico cheio de aventuras",
            "Em uma cidade onde acontece um grande crime"
        ]
    },
    {
        pergunta: "O que faz você não querer parar de ler?",
        respostas: [
            "Um casal que eu quero muito ver junto",
            "Uma história cheia de acontecimentos",
            "Uma história que me faz tentar descobrir o final"
        ]
    },
    {
        pergunta: "Qual desses programas você escolheria?",
        respostas: [
            "Um filme romântico",
            "Uma aventura ou fantasia",
            "Um filme de investigação"
        ]
    },
    {
        pergunta: "Qual frase combina mais com você?",
        respostas: [
            "Eu gosto de histórias que mexem com meu coração.",
            "Eu gosto de imaginar lugares e mundos diferentes.",
            "Eu gosto de tentar descobrir o que está por trás da história."
        ]
    }
];


let perguntaAtual = 0;
let pontos = [0, 0, 0];
let perfilAtual = 0;


const perfis = [
    {
        nome: "Leitor Romântico 💕",
        descricao: "Você gosta de histórias cheias de sentimentos, relações e momentos que fazem o coração bater mais forte.",
        livros: [
            {
                nome: "Orgulho e Preconceito",
                autor: "Jane Austen",
                capa: "livro1.jpg",
                descricao: "Uma história clássica sobre sentimentos, relações e diferenças sociais."
            },
            {
                nome: "A Culpa é das Estrelas",
                autor: "John Green",
                capa: "livro2.jpg",
                descricao: "Uma história emocionante sobre amor, amizade e os momentos importantes da vida."
            },
            {
                nome: "Como Eu Era Antes de Você",
                autor: "Jojo Moyes",
                capa: "livro3.jpg",
                descricao: "Uma história sobre encontros inesperados e mudanças que transformam a vida."
            }
        ]
    },

    {
        nome: "Leitor Aventureiro 🗺️",
        descricao: "Sua imaginação gosta de viajar! Você prefere histórias com aventuras, descobertas e mundos diferentes.",
        livros: [
            {
                nome: "Harry Potter e a Pedra Filosofal",
                autor: "J. K. Rowling",
                capa: "livro4.jpg",
                descricao: "Um jovem descobre um mundo mágico e começa uma grande aventura."
            },
            {
                nome: "O Hobbit",
                autor: "J. R. R. Tolkien",
                capa: "livro5.jpg",
                descricao: "Uma aventura por terras fantásticas, cheia de perigos e descobertas."
            },
            {
                nome: "Percy Jackson e o Ladrão de Raios",
                autor: "Rick Riordan",
                capa: "livro6.jpg",
                descricao: "Um garoto descobre que os mitos gregos podem ser muito mais reais do que imaginava."
            }
        ]
    },

    {
        nome: "Leitor Curioso 🔎",
        descricao: "Você adora descobrir pistas, pensar sobre as possibilidades e tentar desvendar os mistérios antes do final.",
        livros: [
            {
                nome: "Sherlock Holmes",
                autor: "Arthur Conan Doyle",
                capa: "livro7.jpg",
                descricao: "Casos misteriosos são solucionados através da observação e da inteligência."
            },
            {
                nome: "O Assassinato no Expresso do Oriente",
                autor: "Agatha Christie",
                capa: "livro8.jpg",
                descricao: "Um assassinato acontece durante uma viagem e todos os passageiros se tornam suspeitos."
            },
            {
                nome: "Coraline",
                autor: "Neil Gaiman",
                capa: "livro9.jpg",
                descricao: "Uma garota encontra uma passagem para uma realidade estranha e cheia de segredos."
            }
        ]
    }
];


botaoComecar.onclick = function() {
    inicio.style.display = "none";
    quiz.style.display = "block";

    perguntaAtual = 0;
    pontos = [0, 0, 0];

    mostraPergunta();
};


function mostraPergunta() {

    numeroPergunta.textContent = "Pergunta " + (perguntaAtual + 1) + " de 5";
    textoPergunta.textContent = perguntas[perguntaAtual].pergunta;

    for (let i = 0; i < alternativas.length; i++) {
        alternativas[i].textContent = perguntas[perguntaAtual].respostas[i];
    }
}


for (let i = 0; i < alternativas.length; i++) {

    alternativas[i].onclick = function() {

        pontos[i]++;

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {
            mostraPergunta();
        } else {
            mostraResultado();
        }
    };
}


function mostraResultado() {

    quiz.style.display = "none";
    resultado.style.display = "block";

    let maiorPontuacao = Math.max(...pontos);

    perfilAtual = pontos.indexOf(maiorPontuacao);

    perfil.textContent = perfis[perfilAtual].nome;
    descricaoPerfil.textContent = perfis[perfilAtual].descricao;

    livro.style.display = "none";
}


botaoSortear.onclick = function() {

    let livros = perfis[perfilAtual].livros;

    let numeroAleatorio = Math.floor(Math.random() * livros.length);

    let livroSorteado = livros[numeroAleatorio];

    capaLivro.src = livroSorteado.capa;
    capaLivro.alt = "Capa de " + livroSorteado.nome;

    nomeLivro.textContent = livroSorteado.nome;
    autorLivro.textContent = "Autor: " + livroSorteado.autor;
    descricaoLivro.textContent = livroSorteado.descricao;

    livro.style.display = "flex";
};


botaoNovoQuiz.onclick = function() {

    resultado.style.display = "none";
    inicio.style.display = "block";

    livro.style.display = "none";
};
```


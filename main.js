

const quizArea = document.getElementById("quiz-area");
const bookArea = document.getElementById("book-area");

let perguntaAtual = 0;
let respostas = [];
let perfilAtual = "";

const perguntas = [
    {
        texto: "Qual tipo de história você prefere?",
        opcoes: [
            ["Um romance cheio de emoções", "romantico"],
            ["Uma aventura em um mundo mágico", "aventureiro"],
            ["Um mistério cheio de segredos", "detetive"]
        ]
    },
    {
        texto: "Onde você gostaria de ler?",
        opcoes: [
            ["Em um café aconchegante", "romantico"],
            ["Em um castelo ou floresta", "aventureiro"],
            ["Em uma casa cheia de mistérios", "detetive"]
        ]
    },
    {
        texto: "O que mais prende sua atenção?",
        opcoes: [
            ["Um casal tentando ficar junto", "romantico"],
            ["Uma grande aventura", "aventureiro"],
            ["Descobrir quem está mentindo", "detetive"]
        ]
    },
    {
        texto: "Escolha uma frase:",
        opcoes: [
            ["O amor aparece quando menos esperamos.", "romantico"],
            ["A aventura começa fora do caminho.", "aventureiro"],
            ["Todo segredo deixa alguma pista.", "detetive"]
        ]
    },
    {
        texto: "Como você gosta de terminar um livro?",
        opcoes: [
            ["Com o coração quentinho", "romantico"],
            ["Com vontade de viver outra aventura", "aventureiro"],
            ["Surpreso com o final", "detetive"]
        ]
    }
];

const perfis = {
    romantico: {
        nome: "Romântico de carteirinha",
        descricao: "Você gosta de romances, sentimentos intensos e histórias que ficam na memória.",
        motivo: "Suas respostas mostram que você prefere acompanhar sentimentos, relacionamentos e as emoções dos personagens.",
        livros: [
            ["Divinos rivais", "book1.jpg"],
            ["Powerless", "book2.jpg"],
            ["Melhor do que nos filmes", "book3.jpg"]
        ]
    },

    aventureiro: {
        nome: "Aventureiro de mundos",
        descricao: "Você gosta de aventuras, fantasia e histórias que levam para outros universos.",
        motivo: "Suas respostas mostram que você gosta de descobertas, desafios e histórias cheias de imaginação.",
        livros: [
            ["A rainha vermelha", "book4.jpg"],
            ["Era uma vez um coração partido", "book5.jpg"],
            ["Jogos de herança", "book6.jpg"]
        ]
    },

    detetive: {
        nome: "Detetive de emoções",
        descricao: "Você gosta de mistérios, segredos e finais inesperados.",
        motivo: "Suas respostas mostram que você gosta de investigar pistas, criar teorias e tentar descobrir o final.",
        livros: [
            ["Manual de assassinato para boas garotas", "book7.jpg"],
            ["O reaparecimento de Rachel Price", "book8.jpg"],
            ["Divinos Rivais", "book1.jpg"]
        ]
    }
};

document.getElementById("start-quiz").addEventListener("click", iniciarQuiz);

function iniciarQuiz() {
    perguntaAtual = 0;
    respostas = [];
    perfilAtual = "";

    mostrarPergunta();

    bookArea.innerHTML = `
        <div class="livro-vazio">
            <span>📚</span>
            <p>Termine o quiz para sortear seu livro!</p>
        </div>
        <button id="draw-book" disabled>Sortear meu livro</button>
    `;
}

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];

    quizArea.innerHTML = `
        <p>Pergunta ${perguntaAtual + 1} de ${perguntas.length}</p>

        <div class="progresso">
            <div style="width: ${(perguntaAtual + 1) / perguntas.length * 100}%"></div>
        </div>

        <h3>${pergunta.texto}</h3>

        <div id="opcoes"></div>

        <button id="voltar" ${perguntaAtual === 0 ? "disabled" : ""}>
            Voltar
        </button>

        <button id="proxima" disabled>
            ${perguntaAtual === perguntas.length - 1 ? "Ver resultado" : "Próxima"}
        </button>
    `;

    const opcoes = document.getElementById("opcoes");

    pergunta.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");
        botao.className = "opcao";
        botao.textContent = opcao[0];

        if (respostas[perguntaAtual] === indice) {
            botao.classList.add("selecionada");
        }

        botao.addEventListener("click", function() {
            respostas[perguntaAtual] = indice;

            document.querySelectorAll(".opcao").forEach(function(item) {
                item.classList.remove("selecionada");
            });

            botao.classList.add("selecionada");
            document.getElementById("proxima").disabled = false;
        });

        opcoes.appendChild(botao);
    });

    if (respostas[perguntaAtual] !== undefined) {
        document.getElementById("proxima").disabled = false;
    }

    document.getElementById("voltar").addEventListener("click", function() {
        if (perguntaAtual > 0) {
            perguntaAtual--;
            mostrarPergunta();
        }
    });

    document.getElementById("proxima").addEventListener("click", function() {
        if (respostas[perguntaAtual] === undefined) return;

        if (perguntaAtual < perguntas.length - 1) {
            perguntaAtual++;
            mostrarPergunta();
        } else {
            mostrarResultado();
        }
    });
}

function mostrarResultado() {
    let pontos = {
        romantico: 0,
        aventureiro: 0,
        detetive: 0
    };

    respostas.forEach(function(resposta, indice) {
        const perfil = perguntas[indice].opcoes[resposta][1];
        pontos[perfil]++;
    });

    let maiorPontuacao = Math.max(
        pontos.romantico,
        pontos.aventureiro,
        pontos.detetive
    );

    let empatados = Object.keys(pontos).filter(function(perfil) {
        return pontos[perfil] === maiorPontuacao;
    });

    perfilAtual = empatados[Math.floor(Math.random() * empatados.length)];

    const perfil = perfis[perfilAtual];

    let minhasRespostas = respostas.map(function(resposta, indice) {
        return perguntas[indice].opcoes[resposta][0];
    });

    quizArea.innerHTML = `
        <p>SEU PERFIL LITERÁRIO</p>
        <h2>${perfil.nome}</h2>
        <p>${perfil.descricao}</p>

        <div class="explicacao">
            <h3>Por que esse é seu perfil?</h3>
            <p>${perfil.motivo}</p>
            <p><strong>Suas respostas:</strong></p>
            <ul>
                ${minhasRespostas.map(function(resposta) {
                    return `<li>${resposta}</li>`;
                }).join("")}
            </ul>
        </div>

        <button id="ir-sorteio">Sortear meu livro ♡</button>
        <button id="refazer">Refazer quiz</button>
    `;

    bookArea.innerHTML = `
        <div class="livro-vazio">
            <span>✨</span>
            <p>Agora você pode descobrir seu próximo livro!</p>
        </div>
        <button id="draw-book">Sortear meu livro</button>
    `;

    document.getElementById("draw-book").addEventListener("click", sortearLivro);

    document.getElementById("ir-sorteio").addEventListener("click", function() {
        sortearLivro();
        document.querySelector(".card:last-child").scrollIntoView({
            behavior: "smooth"
        });
    });

    document.getElementById("refazer").addEventListener("click", iniciarQuiz);
}

function sortearLivro() {
    if (perfilAtual === "") return;

    const livros = perfis[perfilAtual].livros;
    const livro = livros[Math.floor(Math.random() * livros.length)];

    bookArea.innerHTML = `
        <h3>Seu livro sorteado!</h3>

        <img
            class="capa"
            src="images/${livro[1]}"
            alt="Capa do ${livro[0]}"
            onerror="this.onerror=null; this.src='${livro[1]}'"
        >

        <h3>${livro[0]}</h3>
        <p>Perfil: ${perfis[perfilAtual].nome}</p>

        <button id="sortear-novamente">Sortear outro</button>
    `;

    document.getElementById("sortear-novamente").addEventListener("click", sortearLivro);
}

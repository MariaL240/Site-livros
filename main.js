
const livrosPorPerfil = {
  1: [
    {
      titulo: "Livro 1",
      autor: "Confira a edição da capa",
      genero: "Romance",
      imagem: "images/Book 1.jpg"
    },
    {
      titulo: "Livro 2",
      autor: "Confira a edição da capa",
      genero: "Romance",
      imagem: "images/Book 2.jpg"
    },
    {
      titulo: "Livro 3",
      autor: "Confira a edição da capa",
      genero: "Romance",
      imagem: "images/Book 3.jpg"
    }
  ],

  2: [
    {
      titulo: "Livro 4",
      autor: "Confira a edição da capa",
      genero: "Fantasia e aventura",
      imagem: "images/Book 4.jpg"
    },
    {
      titulo: "Livro 5",
      autor: "Confira a edição da capa",
      genero: "Fantasia e aventura",
      imagem: "images/Book 5.jpg"
    },
    {
      titulo: "Livro 6",
      autor: "Confira a edição da capa",
      genero: "Fantasia e aventura",
      imagem: "images/Book 6.jpg"
    }
  ],

  3: [
    {
      titulo: "Livro 7",
      autor: "Confira a edição da capa",
      genero: "Suspense e mistério",
      imagem: "images/Book 7.jpg"
    },
    {
      titulo: "Livro 8",
      autor: "Confira a edição da capa",
      genero: "Suspense e mistério",
      imagem: "images/Book 8.jpg"
    },
    {
      titulo: "Livro 1",
      autor: "Confira a edição da capa",
      genero: "Suspense e mistério",
      imagem: "images/Book 1.jpg"
    }
  ]
};

const perfis = {
  1: {
    nome: "Romântico",
    descricao:
      "Você ama histórias que mexem com o coração: relações marcantes, sentimentos intensos e personagens que ficam na memória.",
    dica:
      "Seu caminho literário passa por romances, dramas e histórias emocionantes."
  },

  2: {
    nome: "Aventureiro",
    descricao:
      "Você gosta de fugir da realidade e explorar universos novos, descobrir segredos e acompanhar jornadas cheias de surpresas.",
    dica:
      "Fantasia, aventura e mundos imaginários podem ser sua próxima paixão."
  },

  3: {
    nome: "Detetive de emoções",
    descricao:
      "Você adora pistas, mistérios e reviravoltas. Uma história previsível não prende sua atenção por muito tempo.",
    dica:
      "Suspenses, thrillers e mistérios combinam com seu jeito curioso."
  }
};

const perguntas = [
  {
    texto: "Que tipo de história chama mais sua atenção?",
    opcoes: [
      { texto: "Um romance cheio de sentimentos", perfil: 1 },
      { texto: "Uma aventura em um mundo diferente", perfil: 2 },
      { texto: "Um mistério cheio de pistas", perfil: 3 }
    ]
  },

  {
    texto: "Qual cenário você escolheria para ler?",
    opcoes: [
      { texto: "Uma cidade com encontros inesperados", perfil: 1 },
      { texto: "Um reino mágico ou lugar desconhecido", perfil: 2 },
      { texto: "Uma casa antiga cheia de segredos", perfil: 3 }
    ]
  },

  {
    texto: "Que tipo de personagem mais te conquista?",
    opcoes: [
      { texto: "Alguém intenso que acredita no amor", perfil: 1 },
      { texto: "Alguém corajoso que enfrenta desafios", perfil: 2 },
      { texto: "Alguém esperto que desvenda enigmas", perfil: 3 }
    ]
  },

  {
    texto: "O que você mais quer sentir ao ler?",
    opcoes: [
      { texto: "Borboletas na barriga e emoção", perfil: 1 },
      { texto: "A sensação de estar em uma grande jornada", perfil: 2 },
      { texto: "Curiosidade para descobrir a verdade", perfil: 3 }
    ]
  },

  {
    texto: "Escolha uma frase para sua próxima leitura:",
    opcoes: [
      { texto: "Alguns encontros mudam tudo.", perfil: 1 },
      { texto: "A aventura começa além do desconhecido.", perfil: 2 },
      { texto: "Nem tudo é o que parece.", perfil: 3 }
    ]
  }
];

// ELEMENTOS DO HTML
const botaoIniciar = document.querySelector("#botao-iniciar");
const inicioQuestionario = document.querySelector("#inicio-questionario");
const formulario = document.querySelector("#form-questionario");
const perguntaTexto = document.querySelector("#pergunta-texto");
const opcoesResposta = document.querySelector("#opcoes-resposta");
const progressoTexto = document.querySelector("#progresso-texto");
const progressoBarra = document.querySelector("#progresso-barra");
const avisoResposta = document.querySelector("#aviso-resposta");
const botaoVoltar = document.querySelector("#botao-voltar");
const botaoProximo = document.querySelector("#botao-proximo");
const resultadoPerfil = document.querySelector("#resultado-perfil");
const nomePerfil = document.querySelector("#nome-perfil");
const descricaoPerfil = document.querySelector("#descricao-perfil");
const dicaPerfil = document.querySelector("#dica-perfil");
const botaoRefazer = document.querySelector("#botao-refazer");

const botaoSortear = document.querySelector("#botao-sortear");
const estadoSorteio = document.querySelector("#estado-sorteio");
const resultadoLivro = document.querySelector("#resultado-livro");
const capaLivro = document.querySelector("#capa-livro");
const tituloLivro = document.querySelector("#titulo-livro");
const autorLivro = document.querySelector("#autor-livro");
const generoLivro = document.querySelector("#genero-livro");
const botaoSortearNovamente =
  document.querySelector("#botao-sortear-novamente");

// ESTADO DO QUESTIONÁRIO
let perguntaAtual = 0;
let respostas = Array(perguntas.length).fill(null);
let perfilAtual = null;
let ultimoLivroSorteado = null;

// EVENTOS DOS BOTÕES
botaoIniciar.addEventListener("click", iniciarQuestionario);
botaoVoltar.addEventListener("click", voltarPergunta);
botaoProximo.addEventListener("click", avancarPergunta);
botaoRefazer.addEventListener("click", reiniciarQuestionario);
botaoSortear.addEventListener("click", sortearLivro);
botaoSortearNovamente.addEventListener("click", sortearLivro);

// COMEÇAR QUESTIONÁRIO
function iniciarQuestionario() {
  inicioQuestionario.hidden = true;
  resultadoPerfil.hidden = true;
  formulario.hidden = false;

  perguntaAtual = 0;
  respostas = Array(perguntas.length).fill(null);

  mostrarPergunta();
}

// MOSTRAR PERGUNTA ATUAL
function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];

  perguntaTexto.textContent = pergunta.texto;

  progressoTexto.textContent =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

  progressoBarra.style.width =
    `${((perguntaAtual + 1) / perguntas.length) * 100}%`;

  avisoResposta.textContent = "";
  botaoVoltar.hidden = perguntaAtual === 0;

  botaoProximo.textContent =
    perguntaAtual === perguntas.length - 1
      ? "Ver meu perfil →"
      : "Próxima →";

  opcoesResposta.replaceChildren();

  pergunta.opcoes.forEach((opcao, indice) => {
    const label = document.createElement("label");
    label.className = "opcao-resposta";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "resposta";
    input.value = String(indice);
    input.checked = respostas[perguntaAtual] === indice;

    const texto = document.createElement("span");
    texto.textContent = opcao.texto;

    label.append(input, texto);
    opcoesResposta.append(label);
  });
}

// AVANÇAR NO QUESTIONÁRIO
function avancarPergunta() {
  const selecionada = formulario.querySelector(
    'input[name="resposta"]:checked'
  );

  if (!selecionada) {
    avisoResposta.textContent =
      "Escolha uma alternativa para continuar.";
    return;
  }

  respostas[perguntaAtual] = Number(selecionada.value);

  if (perguntaAtual < perguntas.length - 1) {
    perguntaAtual++;
    mostrarPergunta();
    return;
  }

  calcularPerfil();
}

// VOLTAR UMA PERGUNTA
function voltarPergunta() {
  if (perguntaAtual > 0) {
    perguntaAtual--;
    mostrarPergunta();
  }
}

// CALCULAR PERFIL PELAS RESPOSTAS
function calcularPerfil() {
  const pontos = {
    1: 0,
    2: 0,
    3: 0
  };

  respostas.forEach((indiceResposta, indicePergunta) => {
    const perfilEscolhido =
      perguntas[indicePergunta].opcoes[indiceResposta].perfil;

    pontos[perfilEscolhido]++;
  });

  const maiorPontuacao = Math.max(...Object.values(pontos));

  const empatados = Object.keys(pontos)
    .filter((perfil) => pontos[perfil] === maiorPontuacao)
    .map(Number);

  // Se houver empate, escolhe aleatoriamente entre os empatados.
  perfilAtual =
    empatados[Math.floor(Math.random() * empatados.length)];

  mostrarPerfil();
}

// MOSTRAR RESULTADO DO PERFIL
function mostrarPerfil() {
  const perfil = perfis[perfilAtual];

  formulario.hidden = true;
  resultadoPerfil.hidden = false;

  nomePerfil.textContent =
    `Perfil ${perfilAtual} — ${perfil.nome}`;

  descricaoPerfil.textContent = perfil.descricao;
  dicaPerfil.textContent = perfil.dica;

  botaoSortear.disabled = false;
  estadoSorteio.hidden = false;
  resultadoLivro.hidden = true;
}

// REFAZER QUESTIONÁRIO
function reiniciarQuestionario() {
  perfilAtual = null;

  formulario.hidden = true;
  resultadoPerfil.hidden = true;
  inicioQuestionario.hidden = false;

  estadoSorteio.hidden = false;
  resultadoLivro.hidden = true;
  botaoSortear.disabled = true;

  perguntaAtual = 0;
  respostas = Array(perguntas.length).fill(null);
}

// SORTEAR UM LIVRO DO PERFIL
function sortearLivro() {
  if (!perfilAtual) {
    return;
  }

  const livros = livrosPorPerfil[perfilAtual];

  // Tenta não repetir o mesmo livro em sorteios consecutivos.
  let opcoes = livros.filter(
    (livro) => livro.titulo !== ultimoLivroSorteado
  );

  if (opcoes.length === 0) {
    opcoes = livros;
  }

  const livro =
    opcoes[Math.floor(Math.random() * opcoes.length)];

  ultimoLivroSorteado = livro.titulo;

  tituloLivro.textContent = livro.titulo;
  autorLivro.textContent = livro.autor;
  generoLivro.textContent = livro.genero;

  capaLivro.src = livro.imagem;
  capaLivro.alt = `Capa de ${livro.titulo}`;

  // Se as imagens estiverem na mesma pasta dos códigos,
  // tenta também localizar o arquivo sem a pasta "images".
  capaLivro.onerror = () => {
    capaLivro.onerror = null;
    capaLivro.src = livro.imagem.replace("images/", "");
  };

  estadoSorteio.hidden = true;
  resultadoLivro.hidden = false;
}

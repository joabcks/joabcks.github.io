//Ativar links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  //funcao para verificar se href esta incluido na url
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }

}

parametros.forEach(ativarProduto);

// Perguntas frquentes

const perguntas = document.querySelectorAll(".perguntas button");


function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const constrols = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(constrols);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute('aria-expanded', ativa);


}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');



function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {
    galeriaContainer.prepend(img);
  }

}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
/* Insere classe 'js' no HTML para verificar se o Java Script está ativado.
Se não estiver o site não carrega os efeitos */
document.documentElement.classList.add('js');


if (window.SimpleAnime) {
  new SimpleAnime();
}


// Lógica animacao nos cards

// 1 - Selecionar elementos que devem ser animados
const target = document.querySelectorAll('[data-anime]');

// 2 - Definir a classe que é adicionada durante a animação
const animationClass = 'animate';

function animeScroll() {

  // 3.1 - Verificar a distância entre a barra de scroll e o topo do site
  // 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
  // 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5);
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

// 5 - Otimizar ativação
animeScroll();

if (target.length) {
  // 3 - Criar função de animação
  window.addEventListener('scroll', function () {
    // 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
    animeScroll();
  });
}



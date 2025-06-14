// ===== Controle do botão "Voltar ao Menu" e do menu fixo =====

const btnVoltarMenu = document.getElementById('btn-voltar-menu');
const header = document.querySelector('header');
const navFixo = document.querySelector('.nav-fixo');

window.addEventListener('scroll', () => {
  const headerBottom = header.getBoundingClientRect().bottom;

  if (headerBottom < 0) {
    btnVoltarMenu.classList.add('show');
    navFixo.classList.add('oculto');
  } else {
    btnVoltarMenu.classList.remove('show');
    navFixo.classList.remove('oculto');
  }
});

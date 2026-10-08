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

// Carrossel de Certificados //
    const slide = document.querySelector('.carousel-slide');
    const cards = document.querySelectorAll('.cert-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let index = 0;
    const total = cards.length;

    function uptadeSlide() {
      slide.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      index = (index + 1) % total;
      uptadeSlide();
    }

    function prevSlide() {
      index = (index - 1 + total) % total;
      uptadeSlide();
    }

    if (prevBtn && nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    }

    setInterval(nextSlide, 25000); // Muda de slide a cada 25 segundos

    window.addEventListener('load', () => {
  // Animação para todos os elementos com a classe .animate-text
  document.querySelectorAll('.animate-text').forEach((el) => {
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';
    });
  });

// Animação para elementos que devem deslizar de baixo para cima
  const elements = document.querySelectorAll('.animate-element');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 400 + index * 200);
  });
});

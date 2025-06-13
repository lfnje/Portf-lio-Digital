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

// ===== Formulário de Contato =====

const formContato = document.getElementById('form-contato');
const statusForm = document.getElementById('form-status');

// Define a URL base da API dependendo do ambiente
const API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:3001'
  : 'https://portf-lio-digital-com-integra-o-de.onrender.com';

formContato.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const assunto = document.getElementById('assunto').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    statusForm.textContent = 'Por favor, preencha todos os campos obrigatórios.';
    statusForm.style.color = '#ff6b6b';
    statusForm.classList.remove('hidden');
    return;
  }

  fetch(`${API_URL}/api/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome,
      email,
      assunto,
      mensagem
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar email');
    }
    return response.json();
  })
  .then(data => {
    statusForm.textContent = 'Mensagem enviada com sucesso!';
    statusForm.style.color = '#4CAF50'; // Verde
    statusForm.classList.remove('hidden');
    formContato.reset();

    setTimeout(() => {
      statusForm.classList.add('hidden');
    }, 5000);
  })
  .catch(error => {
    console.error('Erro ao enviar mensagem:', error);
    statusForm.textContent = 'Erro ao enviar a mensagem. Tente novamente.';
    statusForm.style.color = '#ff6b6b';
    statusForm.classList.remove('hidden');

    setTimeout(() => {
      statusForm.classList.add('hidden');
    }, 5000);
  });
});
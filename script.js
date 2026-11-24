const toast = document.querySelector('#toast');
let toastTimer;

function showPlaceholder(message = 'Botão reservado para configuração.') {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.js-placeholder').forEach((button) => {
  button.addEventListener('click', () => showPlaceholder());
});

document.querySelector('#simulator').addEventListener('submit', (event) => {
  event.preventDefault();
  showPlaceholder('Simulação visual — destino ainda não configurado.');
});

const amount = document.querySelector('#amount');
amount.addEventListener('input', () => {
  const digits = amount.value.replace(/\D/g, '').slice(0, 11);
  amount.value = digits ? (Number(digits) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '';
});

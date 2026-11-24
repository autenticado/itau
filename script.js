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
  openModal();
});

const modal = document.querySelector('#simulation-modal');
let previouslyFocused;

function openModal() {
  previouslyFocused = document.activeElement;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  previouslyFocused?.focus();
}

modal.querySelectorAll('[data-close-modal]').forEach((element) => {
  element.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

const amount = document.querySelector('#amount');
amount.addEventListener('input', () => {
  const digits = amount.value.replace(/\D/g, '').slice(0, 11);
  amount.value = digits ? (Number(digits) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '';
});

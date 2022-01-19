const openModal = document.querySelector('.modal-btn');
const closeModal = document.querySelector('.close-btn');
const container = document.querySelector('.modal-overlay');

openModal.addEventListener('click', () => {
  container.classList.toggle('open-modal')
});

closeModal.addEventListener('click', () => {
  container.classList.remove('open-modal')
});

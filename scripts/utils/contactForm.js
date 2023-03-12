export {modal, overlay, btnOpenModal, btnCloseModal, openModal, closeModal}


const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.openModal');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.add('modal--open');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.remove('modal--open');
  overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);







'use strict';

let firstButton = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < firstButton.length; i++) {
  firstButton[i].addEventListener('click', openModal);
}

closeButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

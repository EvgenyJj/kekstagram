import './rendering-miniatures.js';
import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const pictureItems = document.querySelectorAll('.picture');
const closeButtonBigPicture = document.querySelector('.big-picture__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscKeydown);
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscKeydown);
};

pictureItems.forEach((pictureItem) =>
  pictureItem.addEventListener('click', () => {
    openBigPicture();
}));

closeButtonBigPicture.addEventListener('click', () => {
  closeBigPicture();
});


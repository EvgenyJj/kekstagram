import { isEscapeKey } from "./util.js";
import { setValidator, validPristine, resetPristine } from "./validation.js";

const form = document.querySelector('.img-upload__form');
const uploadFormInput = document.querySelector('.img-upload__input');
const formEditModal = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('.img-upload__cancel');

const openFormEditModal = () => {
  formEditModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeFormButton.addEventListener('click', onCloseFormButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
};

const closeFormEditModal = () => {
  form.reset();
  resetPristine();
  formEditModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeFormButton.removeEventListener('click', onCloseFormButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
};

const onModalEscKeydown = (evt) => {
  const hashtagsInput = evt.target.closest('.text__hashtags');
  const descriptionInput = evt.target.closest('.text__description');

  if (isEscapeKey(evt) && !hashtagsInput && !descriptionInput) {
    evt.preventDefault();
    closeFormEditModal();
  }
};

function onCloseFormButtonClick() {
  closeFormEditModal();
};

function onUploadInputChange() {
  openFormEditModal();
};

function onFormSubmit(evt) {
  evt.preventDefault();
  validPristine();
};

const initFormAction = () => {
  uploadFormInput.addEventListener('change', onUploadInputChange);
  form.addEventListener('submit', onFormSubmit);
  setValidator();
};

export {initFormAction};

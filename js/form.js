import { isEscapeKey } from "./util.js";
import { setValidator, validPristine, resetPristine } from "./validation.js";
import { setScale, resetScale } from "./scale.js";
import { createSlider, changeSliderOptions } from "./effect.js";

const form = document.querySelector('.img-upload__form');
const uploadFormInput = document.querySelector('.img-upload__input');
const formEditModal = document.querySelector('.img-upload__overlay');
const closeFormButton = document.querySelector('.img-upload__cancel');
const effectsControl = document.querySelector('.effects__list');
const checkedEffect = document.querySelector('.effects__radio[checked]');

const openFormEditModal = () => {
  formEditModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeFormButton.addEventListener('click', onCloseFormButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
};

const closeFormEditModal = () => {
  form.reset();
  resetPristine();
  resetScale();
  changeSliderOptions(checkedEffect.value);
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

function onEffectsControlChange(evt) {
  changeSliderOptions(evt.target.value);
}

const initFormAction = () => {
  setValidator();
  setScale();
  createSlider(checkedEffect.value);
  uploadFormInput.addEventListener('change', onUploadInputChange);
  form.addEventListener('submit', onFormSubmit);
  effectsControl.addEventListener('change', onEffectsControlChange);
};

export {initFormAction};

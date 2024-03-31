const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;
const DEFAULT_VALUE = 100;

const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValueInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const getInputValue = () => parseInt(scaleControlValueInput.value, 10);

const changeScale = (value) => {
  imgPreview.style.transform = `scale(${value / 100})`;
  scaleControlValueInput.value = `${value}%`;
};

function onScaleControlSmallerButtonClick() {
  const stepDown = Math.max(getInputValue() - SCALE_STEP, SCALE_MIN);
  changeScale(stepDown);
};

function onScaleControlBiggerButtonClick() {
  const stepUp = Math.min(getInputValue() + SCALE_STEP, SCALE_MAX);
  changeScale(stepUp);
};

const setScale = () => {
  scaleControlSmallerButton.addEventListener('click', onScaleControlSmallerButtonClick);
  scaleControlBiggerButton.addEventListener('click', onScaleControlBiggerButtonClick);
};

const resetScale = () => changeScale(DEFAULT_VALUE);

export {setScale, resetScale};


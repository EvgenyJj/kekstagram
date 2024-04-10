const checkingMaximumStringLength = (string, length) => length >= string.length;

const getRandomIntegerFromRange = (min, max) => {
  if (min >= max) {
    console.error('Не верно указан диапазон: значение "от"' + '(' + min + ')' + ' первышет или равно "до"' + '(' + max + ').');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomArrayElement = (elements) => elements[getRandomIntegerFromRange(0, elements.length - 1)];

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomIntegerFromRange, getRandomArrayElement, isEscapeKey, shuffleArray, debounce};

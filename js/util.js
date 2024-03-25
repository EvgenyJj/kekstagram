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

export {getRandomIntegerFromRange, getRandomArrayElement, isEscapeKey};

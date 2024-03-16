const checkingMaximumStringLength = (string, length) => length >= string.length;

const getRandomIntegerFromRange = (min, max) => {
  if (min >= max) {
    throw new Error('Не верно указан диапазон: значение "от" первышет или равно "до"');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomArrayElement = (elements) => elements[getRandomIntegerFromRange(0, elements.length - 1)];

export {getRandomIntegerFromRange, getRandomArrayElement};

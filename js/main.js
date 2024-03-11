const getRandomIntegerFromRange = function (min, max) {
  if (min >= max) {
    throw new Error('Не верно указан диапазон: значение "от" первышет или равно "до"');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkingMaximumStringLength = (string, length) => length >= string.length;

getRandomIntegerFromRange(15, 55);

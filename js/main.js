// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  if (min >= max) {
    throw new Error(' Не верно указан диапазон: максимальное значение превышает или равно минимальному значение. ');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для проверки максимальной длины строки.

const MAXIMUM_STRING_LENGHT = 140;

function getStringLengthCheck (testString, MAXIMUM_STRING_LENGHT) {
  if (testString > MAXIMUM_STRING_LENGHT) {
    return false;
  }
  return true;
}



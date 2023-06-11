// Функция, возвращающая случайное целое число из переданного диапазона включительно.
export function getRandomPositiveInteger (min, max) {
  if (min >= max) {
    throw new Error(' Не верно указан диапазон: значение "от" первышет или равно "до" ');
  }
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для проверки максимальной длины строки.
export const getStringLengthCheck = (testString, MAXIMUM_STRING_LENGHT) => {
  return testString.length > MAXIMUM_STRING_LENGHT ? false : true;
}

// Функция-генератор для получения уникальных идентификаторов.
export function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

// Функция-генератор для получения случайных идентификаторов из указанного диапазона, и так,
// чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
export function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

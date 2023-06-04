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

// Функция генерации массива из целых, неповторяющихся чисел в диапозоне.
export const generateIdNumber = _.shuffle(_.range(1,26)).slice(0,25);

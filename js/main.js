// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomPositiveInteger (min, max) {
  if (min >= max) {
    throw new Error(' Не верно указан диапазон: значение "от" первышет или равно "до" ');
  }
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для проверки максимальной длины строки.
const getStringLengthCheck = (testString, MAXIMUM_STRING_LENGHT) => {
  return testString.length > MAXIMUM_STRING_LENGHT ? false : true;
}
const commentsCount = 4;
const MAXIMUM_STRING_LENGHT = 140;
const MIN_NUMBER = 1;
const MAX_NUMBER = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR =6;
const DESCRIPTION = 'Придумать описание.. Может можно не можно..?';
const TEXT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAME = [
  'Ольга',
  'Евгений',
  'Наталья',
  'Мария',
  'Николай',
  'Анастасия',
  'Илья',
  'Денис'
];
let idDescription = 1;
let idComment = getRandomPositiveInteger(1, 1001);
let urlPhoto = 1;

const createComment = () => {
    return {
    id: idComment++,
    avatar: `img/avatar-${getRandomPositiveInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
    message: TEXT_MESSAGE[getRandomPositiveInteger(0, TEXT_MESSAGE.length - 1)],
    name: NAME[getRandomPositiveInteger(0, NAME.length - 1)]
  }
}
const comments = Array.from({length: commentsCount}, createComment)

const createDescriptionPhoto = () => {
  return {
    id: idDescription++,
    url: `photos/${urlPhoto++}.jpg`,
    description: DESCRIPTION,
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: comments
  }
}

const generateUserPostedPhoto = Array.from({length: MAX_NUMBER}, createDescriptionPhoto);
console.log(generateUserPostedPhoto);

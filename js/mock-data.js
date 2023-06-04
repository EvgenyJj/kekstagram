import {getRandomPositiveInteger, generateIdNumber, getStringLengthCheck} from './utils.js';

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

let urlPhoto = 1;

const createComment = () => {
    return {
    id: getRandomPositiveInteger(0, generateIdNumber.length),
    avatar: `img/avatar-${getRandomPositiveInteger(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
    message: TEXT_MESSAGE[getRandomPositiveInteger(0, TEXT_MESSAGE.length - 1)],
    name: NAME[getRandomPositiveInteger(0, NAME.length - 1)]
  }
}
const comments = Array.from({length: commentsCount}, createComment)

const createDescriptionPhoto = () => {
  return {
    id: getRandomPositiveInteger(0, generateIdNumber.length),
    url: `photos/${urlPhoto++}.jpg`,
    description: DESCRIPTION,
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: comments
  }
}

export {MAX_NUMBER, createDescriptionPhoto};

import {getRandomPositiveInteger, createRandomIdFromRangeGenerator, createIdGenerator, getStringLengthCheck} from './utils.js';

const commentsCount = 4;
const MAXIMUM_STRING_LENGHT = 140;
const MIN_VALUE = 1;
const MAX_VALUE = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_VALUE_AVATAR = 1;
const MAX_VALUE_AVATAR =6;
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

const generateId = createRandomIdFromRangeGenerator(MIN_VALUE, MAX_VALUE);
const generateCommentId = createRandomIdFromRangeGenerator(MIN_VALUE, MAX_VALUE);
const generateUrlPhoto = createIdGenerator (MIN_VALUE_AVATAR, MAX_VALUE_AVATAR);

const createComment = () => {
    return {
    id: generateCommentId(MIN_VALUE, MAX_VALUE),
    avatar: `img/avatar-${getRandomPositiveInteger(MIN_VALUE_AVATAR, MAX_VALUE_AVATAR)}.svg`,
    message: TEXT_MESSAGE[getRandomPositiveInteger(0, TEXT_MESSAGE.length - 1)],
    name: NAME[getRandomPositiveInteger(0, NAME.length - 1)]
  }
}
const comments = Array.from({length: commentsCount}, createComment)

const createDescriptionPhoto = () => {
  return {
    id: generateId(),
    url: `photos/${generateUrlPhoto()}.jpg`,
    description: DESCRIPTION,
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: comments
  }
}

export {MAX_VALUE, createDescriptionPhoto};

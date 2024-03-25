import { getRandomIntegerFromRange, getRandomArrayElement } from './util.js';

const DESCRIPTION = 'Здесь должно быть восхитительное описание, к не менее прекрасной фотографии!';

const MESSAGE_DESCRIPTION = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Ольга',
  'Наталья',
  'Татьяна',
  'Евгений',
  'Мария',
  'Николай',
  'Владимир'
];

const NUMBER_OF_POSTS = 25;

let descriptionId = 1;
let pictureId = 1;
let commentId = 1;

const createMessage = () => {
  let message = Array.from({length: getRandomIntegerFromRange(1, 2)}, () => getRandomArrayElement(MESSAGE_DESCRIPTION));
  return Array.from(new Set(message)).join(' ');
};

const createComment = () => {

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomIntegerFromRange(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
};

const createPost = () => {

  return {
    id: descriptionId++,
    url:`photos/${pictureId++}.jpg`,
    description: DESCRIPTION,
    likes: getRandomIntegerFromRange(15, 200),
    comments: Array.from({length: getRandomIntegerFromRange(3, 21)}, createComment),
  };
};

const createPosts = () => Array.from({length: NUMBER_OF_POSTS}, createPost);

export {createPosts};

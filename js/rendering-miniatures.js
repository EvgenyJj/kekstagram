import {generateUserPostedPhoto} from './mock-data.js'

const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content;

const similarPictures = generateUserPostedPhoto();

const similarPicturesFragment = document.createDocumentFragment();

similarPictures.forEach(({url, comments, likes}) => {
  const pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  similarPicturesFragment.appendChild(pictureElement);
});

pictures.appendChild(similarPicturesFragment);

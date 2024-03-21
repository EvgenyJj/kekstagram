import { createPosts } from "./data.js";

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPosts = createPosts();
const picturesContainerFragment = document.createDocumentFragment();

similarPosts.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesContainerFragment.appendChild(pictureElement);
})

picturesContainer.appendChild(picturesContainerFragment);

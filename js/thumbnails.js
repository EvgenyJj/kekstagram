import { createPosts } from "./data.js";
import { renderPostModal } from "./post-modal.js";

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const postThumbnails = createPosts();
const picturesContainerFragment = document.createDocumentFragment();

const createPostThumbnails = (post) => {

  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    renderPostModal(post);
  });

  picturesContainerFragment.appendChild(pictureElement);
};

const renderPostThumbnails = () => {

  postThumbnails.forEach((post) => createPostThumbnails(post));
  picturesContainer.appendChild(picturesContainerFragment);
};

renderPostThumbnails();

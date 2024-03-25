import { isEscapeKey } from './util.js';

const postModal = document.querySelector('.big-picture');
const buttonClosePostModal = postModal.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentsItem = document.querySelector('.social__comment');

let comments = [];

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  postModal.classList.remove('hidden');
  postModal.querySelector('.social__comment-count').classList.add('hidden');
  postModal.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  buttonClosePostModal.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
};

function closeModal () {
  postModal.classList.add('hidden');
  postModal.querySelector('.social__comment-count').classList.remove('hidden');
  postModal.querySelector('.comments-loader').classList.remove('hidden');
  document.body.classList.remove('modal-open');
  buttonClosePostModal.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
};

function onCloseButtonClick () {
  closeModal();
};

const fillingInfoPost = (post) => {

  postModal.querySelector('.big-picture__img img').src = post.url;
  postModal.querySelector('.likes-count').textContent = post.likes;
  postModal.querySelector('.social__caption').textContent = post.description;
}

const createComment = (comment) => {
  const newComment = commentsItem.cloneNode(true);

  newComment.querySelector('.social__picture').src = comment.avatar;
  newComment.querySelector('.social__picture').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const fillingComments = () => {
  comments.forEach((comment) => commentsList.append(createComment(comment)));
}

const renderPostModal = (post) => {
  commentsList.innerHTML = '';
  comments = post.comments;
  openModal();
  fillingInfoPost(post);
  fillingComments();
};

export {renderPostModal};

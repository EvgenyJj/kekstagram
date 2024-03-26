import { isEscapeKey } from './util.js';

const COMMENTS_STEP = 5;

const postModal = document.querySelector('.big-picture');
const buttonClosePostModal = postModal.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentsItem = document.querySelector('.social__comment');
const commentShownCounter = document.querySelector('.social__comment-shown-count');
const commentTotalCounter = document.querySelector('.social__comment-total-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

let comments = [];
let displayedComments = 0;

const updateCommentCounter = () => {
  displayedComments = Math.min(displayedComments + COMMENTS_STEP, comments.length);
  commentShownCounter.textContent = displayedComments;
};

const setLoaderButtonStatus = () => {
  commentsLoaderButton.classList.toggle('hidden', displayedComments >= comments.length);
};

const createComment = (comment) => {
  const newComment = commentsItem.cloneNode(true);

  newComment.querySelector('.social__picture').src = comment.avatar;
  newComment.querySelector('.social__picture').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};

const fillingComments = () => {
  comments.slice(displayedComments, displayedComments + COMMENTS_STEP).forEach((comment) => commentsList.append(createComment(comment)));
  updateCommentCounter();
  setLoaderButtonStatus();
};

const fillingInfoPost = (post) => {

  postModal.querySelector('.big-picture__img img').src = post.url;
  postModal.querySelector('.likes-count').textContent = post.likes;
  postModal.querySelector('.social__caption').textContent = post.description;
};

function openModal () {
  postModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonClosePostModal.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
  commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
};

function closeModal () {
  postModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  buttonClosePostModal.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
  commentsLoaderButton.removeEventListener('click', onCommentsLoaderButtonClick);
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function onCloseButtonClick () {
  closeModal();
};

function onCommentsLoaderButtonClick () {
  fillingComments();
};

const resetLastPostValues = () => {
  commentsList.innerHTML = '';
  commentTotalCounter.textContent = comments.length;
  displayedComments = 0;
};

const renderPostModal = (post) => {
  comments = post.comments;
  resetLastPostValues();
  openModal();
  fillingInfoPost(post);
  fillingComments();
};

export {renderPostModal};

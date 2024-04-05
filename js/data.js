import { getData } from "./api.js";
import { renderPostThumbnails } from "./thumbnails.js";
import { renderError } from "./alert.js";

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const uploadPosts = (data) => {
  renderPostThumbnails(data);
};

const showError = () => renderError(dataError);

const initPosts = () => getData(uploadPosts, showError);

export {initPosts};

import { getData } from "./api.js";
import { initPostsFilters } from './filter.js';
import { renderError } from "./alert.js";

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const showSuccess = (data) => initPostsFilters(data);

const showError = () => renderError(dataError);

const initPosts = () => getData(showSuccess, showError);

export {initPosts};

import { renderPostThumbnails } from "./thumbnails.js";
import { shuffleArray, debounce } from "./util.js";

const FILTER_DEFAULT = 'filter-default';
const FILTER_RANDOM = 'filter-random';
const FILTER_DISCUSSED = 'filter-discussed';
const SHUFFLE_COUNT = 10;

const filtersContainer = document.querySelector('.img-filters');
const filters = document.querySelector('.img-filters__form');

const sortPhotos = (data) => data.slice().sort((a, b) => b.comments.length - a.comments.length);

const shufflePhotos = (data) => shuffleArray(data.slice()).slice(0, SHUFFLE_COUNT);

const clearPhotos = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((item) => item.remove());
};

const filterPhotos = (evt, data) => {
  clearPhotos();
  switch(evt.target.id) {
    case FILTER_DISCUSSED :
      return sortPhotos(data);
    case FILTER_RANDOM :
      return shufflePhotos(data);
    case FILTER_DEFAULT :
      return data;
  }
};

const debounces = debounce((evt, data) => renderPostThumbnails(filterPhotos(evt, data)));

const setFilterStatus = (evt) => {
  if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }
};

function onFiltersClick(evt, data) {
  setFilterStatus(evt);
  debounces(evt, data);
}

const initPostsFilters = (data) => {
  renderPostThumbnails(data);
  filtersContainer.classList.remove('img-filters--inactive');
  filters.addEventListener('click', (evt) => onFiltersClick(evt, data));
};

export {initPostsFilters};

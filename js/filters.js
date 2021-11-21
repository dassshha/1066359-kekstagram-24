import {throttle} from './utils/throttle.js';
import {RERENDER_DELAY} from './constants.js';

const filtersContainer = document.querySelector('.img-filters__form');

const defaultFilter = filtersContainer.querySelector('#filter-default');
const randomFilter = filtersContainer.querySelector('#filter-random');
const discussedFilter = filtersContainer.querySelector('#filter-discussed');

const setFiltersClick = (discussedFilterCb, randomFilterCb, defaultFilterCb) => {
  filtersContainer.addEventListener('click', throttle((evt) => {
    if (evt.target.matches('#filter-default')) {
      discussedFilter.classList.remove('img-filters__button--active');
      randomFilter.classList.remove('img-filters__button--active');
      defaultFilter.classList.add('img-filters__button--active');
      defaultFilterCb();
    }
    if (evt.target.matches('#filter-random')) {
      discussedFilter.classList.remove('img-filters__button--active');
      randomFilter.classList.add('img-filters__button--active');
      defaultFilter.classList.remove('img-filters__button--active');
      randomFilterCb();
    }
    if (evt.target.matches('#filter-discussed')) {
      discussedFilter.classList.add('img-filters__button--active');
      randomFilter.classList.remove('img-filters__button--active');
      defaultFilter.classList.remove('img-filters__button--active');
      discussedFilterCb();
    }
  }, RERENDER_DELAY));
};

export  {setFiltersClick};

const filters = document.querySelector('.img-filters');
const defaultFilter = filters.querySelector('#filter-default');
const randomFilter = filters.querySelector('#filter-random');
const discussedFilter = filters.querySelector('#filter-discussed');


const setFiltersClick = (discussedFilterCb, randomFilterCb, defaultFilterCb) => {
  discussedFilter.addEventListener('click', () => {
    discussedFilter.classList.add('img-filters__button--active');
    randomFilter.classList.remove('img-filters__button--active');
    defaultFilter.classList.remove('img-filters__button--active');
    discussedFilterCb();
  });
  randomFilter.addEventListener('click', () => {
    discussedFilter.classList.remove('img-filters__button--active');
    randomFilter.classList.add('img-filters__button--active');
    defaultFilter.classList.remove('img-filters__button--active');
    randomFilterCb();
  });
  defaultFilter.addEventListener('click', () => {
    discussedFilter.classList.remove('img-filters__button--active');
    randomFilter.classList.remove('img-filters__button--active');
    defaultFilter.classList.add('img-filters__button--active');
    defaultFilterCb();
  });
};

export  {setFiltersClick};

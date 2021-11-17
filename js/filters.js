import {getRandomNumber} from './utils.js';

const filters = document.querySelector('.img-filters');
const defaultFilter = filters.querySelector('#filter-default');
const randomFilter = filters.querySelector('#filter-random');
const discussedFilter = filters.querySelector('#filter-discussed');


const sortDown = (a, b) => b.comments.length - a.comments.length;

const generateRandomUniqueNumber = (min, max) => {
  const previousValues = [];

  return  () =>  {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};


const setFiltersClick = (discussedFilterCb, randomFilterCb, defaultFilterCb) => {
  discussedFilter.addEventListener('click', () => discussedFilterCb());
  randomFilter.addEventListener('click', () => randomFilterCb());
  defaultFilter.addEventListener('click', () => defaultFilterCb());
};

export  {setFiltersClick, sortDown, generateRandomUniqueNumber};

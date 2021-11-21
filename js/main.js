import './big-picture.js';
import './form.js';
import './hashtag.js';
import './comment.js';
import './scale.js';
import './slider.js';
import './effects.js';
import {createMiniatures, createDiscussedMiniatures, createRandomMiniatures} from './miniature.js';
import {getData} from './api.js';
import {onMiniatureClick} from './big-picture.js';
import {showResponseFromServerError} from './utils.js';
import {setFiltersClick} from './filters.js';

const miniatures = document.querySelector('.pictures');
const filters = document.querySelector('.img-filters');

getData(
  (pictures) => {
    createMiniatures(pictures);
    miniatures.addEventListener('click', (evt) => onMiniatureClick(pictures, evt));
    filters.classList.remove('img-filters--inactive');
    setFiltersClick(() => createDiscussedMiniatures(pictures), () => createRandomMiniatures(pictures), () => createMiniatures(pictures));
  },
  () => showResponseFromServerError('Произошла ошибка при загрузке данных. Обновите страницу.'),
);


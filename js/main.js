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
import {throttle} from './utils/throttle.js';
import {RERENDER_DELAY} from './constants.js';

const miniatures = document.querySelector('.pictures');
const filters = document.querySelector('.img-filters');

getData(
  (pictures) => {
    createMiniatures(pictures);
    miniatures.addEventListener('click', (evt) => onMiniatureClick(pictures, evt));
    filters.classList.remove('img-filters--inactive');
    setFiltersClick(
      throttle(() => createDiscussedMiniatures(pictures), RERENDER_DELAY),
      throttle(() => createRandomMiniatures(pictures), RERENDER_DELAY),
      throttle(() => createMiniatures(pictures), RERENDER_DELAY),
    );
  },
  () => showResponseFromServerError('Произошла ошибка при загрузке данных. Обновите страницу.'),
);


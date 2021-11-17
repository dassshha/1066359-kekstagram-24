import './big-picture.js';
import './form.js';
import './hashtag.js';
import './comment.js';
import './scale.js';
import './slider.js';
import './effects.js';
import {createMiniatures} from './miniature.js';
import {getData} from './api.js';
import {onMiniatureClick} from './big-picture.js';
import {showResponseFromServerError} from './utils.js';

const miniatures = document.querySelector('.pictures');

getData((pictures) => {
  createMiniatures(pictures);
  miniatures.addEventListener('click', (evt) => onMiniatureClick(pictures, evt));
}, () => showResponseFromServerError('Произошла ошибка при загрузке данных. Обновите страницу.'));


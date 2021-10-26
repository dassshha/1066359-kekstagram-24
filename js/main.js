import {createMiniatures} from './miniature.js';
import {createPhotos} from './data.js';
const miniaturesContainer = document.querySelector('.pictures');

createMiniatures(createPhotos(), miniaturesContainer);



import {sortCommentsDesc, generateRandomUniqueNumber} from './utils.js';
import {PICTURE_ID, RANDOM_PICTURES_COUNT} from './constants.js';

const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const miniaturesContainer = document.querySelector('.pictures');

const clearMiniatures = () => {
  document.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const createMiniature = (photo, miniaturesFragment) => {
  const miniature = miniatureTemplate.cloneNode(true);
  const img = miniature.querySelector('.picture__img');
  img.src = photo.url;
  const likes = miniature.querySelector('.picture__likes');
  likes.textContent = photo.likes;
  const comments = miniature.querySelector('.picture__comments');
  comments.textContent = photo.comments.length;
  miniaturesFragment.append(miniature);
};

const createMiniatures = (pictures) => {
  const miniaturesFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    createMiniature(picture, miniaturesFragment);
  });
  clearMiniatures();
  miniaturesContainer.appendChild(miniaturesFragment);
};

const createDiscussedMiniatures = (pictures) => {
  const discussedPictures = pictures
    .slice()
    .sort(sortCommentsDesc);
  createMiniatures(discussedPictures);
};

const createRandomMiniatures = (pictures) => {
  const generatePictureId = generateRandomUniqueNumber(PICTURE_ID.MIN, PICTURE_ID.MAX);
  const randomUniquePictureIds = Array.from({length: RANDOM_PICTURES_COUNT}, () => generatePictureId());
  const randomPictures = pictures
    .filter((el) => randomUniquePictureIds.includes(el.id));
  createMiniatures(randomPictures);
};

export {createMiniatures, createDiscussedMiniatures, createRandomMiniatures};


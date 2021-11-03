import {photos} from './data.js';

const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');

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

const createMiniatures = (pictures, container) => {
  const miniaturesFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    createMiniature(picture, miniaturesFragment);
  });
  container.appendChild(miniaturesFragment);
};

const miniaturesContainer = document.querySelector('.pictures');
createMiniatures(photos, miniaturesContainer);



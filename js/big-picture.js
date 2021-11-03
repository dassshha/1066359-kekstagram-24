import {findMiniatureData, isEscapeKey} from './utils.js';
import {photos} from './data.js';

const miniatures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const BigPictureButtonClose = bigPicture.querySelector('.cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentTemplate = bigPicture.querySelector('.social__comment');
const comments = bigPicture.querySelector('.social__comments');

const fullCommentData = (data, commentsFragment) => {
  const comment = commentTemplate.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  img.src = data.avatar;
  img.alt = data.name;
  const text = comment.querySelector('.social__text');
  text.textContent = data.message;
  commentsFragment.append(comment);
};
const fullCommentsData = (data) => {
  const commentsFragment = document.createDocumentFragment();
  data.forEach((comment) => fullCommentData(comment, commentsFragment));
  comments.appendChild(commentsFragment);
};

const clearComments = () => {
  while (comments.firstChild) {
    comments.removeChild(comments.firstChild);
  }
};

const FullBigPictureData = (data) => {
  const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
  img.src = data.url;
  const likesCount = bigPicture.querySelector('.likes-count');
  likesCount.textContent = data.likes;
  const commentsCount = bigPicture.querySelector('.comments-count');
  commentsCount.textContent = data.comments.length;
  const description = bigPicture.querySelector('.social__caption');
  description.textContent = data.description;
  fullCommentsData(data.comments);
};

const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onBigPictureEscKeydown);
};

function hideBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
}

BigPictureButtonClose.addEventListener('click', () => {
  hideBigPicture();
});

miniatures.addEventListener('click', (evt) => {
  if (evt.target.matches('.picture__img')) {
    showBigPicture();
    clearComments();
    const miniatureData = findMiniatureData(photos, evt.target.src);
    FullBigPictureData(miniatureData);
  }
});


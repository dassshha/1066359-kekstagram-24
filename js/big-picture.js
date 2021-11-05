import {findMiniatureData} from './utils.js';
import {makeVisualizer} from './show-and-hide-popap.js';
import {photos} from './data.js';

const miniatures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureButtonClose = bigPicture.querySelector('.cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentTemplate = bigPicture.querySelector('.social__comment');
const comments = bigPicture.querySelector('.social__comments');

const fillCommentWithData = (data, commentsFragment) => {
  const comment = commentTemplate.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  img.src = data.avatar;
  img.alt = data.name;
  const text = comment.querySelector('.social__text');
  text.textContent = data.message;
  commentsFragment.append(comment);
};
const fillCommentsWithData = (data) => {
  const commentsFragment = document.createDocumentFragment();
  data.forEach((comment) => fillCommentWithData(comment, commentsFragment));
  comments.appendChild(commentsFragment);
};

const clearComments = () => {
  while (comments.firstChild) {
    comments.removeChild(comments.firstChild);
  }
};

const fillBigPictureWithData = (data) => {
  const img = bigPicture.querySelector('.big-picture__img > img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const description = bigPicture.querySelector('.social__caption');
  clearComments();
  img.src = data.url;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  description.textContent = data.description;
  fillCommentsWithData(data.comments);
};

const bigPictureVisualizer = makeVisualizer(bigPicture);

bigPictureButtonClose.addEventListener('click', () => bigPictureVisualizer.hide());

miniatures.addEventListener('click', (evt) => {
  if (evt.target.matches('.picture__img')) {
    bigPictureVisualizer.show();
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    const miniatureData = findMiniatureData(photos, evt.target.src);
    fillBigPictureWithData(miniatureData);
  }
});


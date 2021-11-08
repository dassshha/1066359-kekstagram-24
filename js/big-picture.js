import {findMiniatureData} from './utils.js';
import {makeVisualizer} from './make-visualizer.js';
import {photos} from './data.js';
import {COMMENTS_AT_ONCE_LOAD_COUNT} from './constants.js';

const miniatures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureButtonClose = bigPicture.querySelector('.cancel');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const commentTemplate = bigPicture.querySelector('.social__comment');
const commentsList = bigPicture.querySelector('.social__comments');
const comments = commentsList.children;
const commentsRange = bigPicture.querySelector('.social__comment-count');
let loadedCommentsCount = COMMENTS_AT_ONCE_LOAD_COUNT;

const fillCommentWithData = (data, commentsFragment) => {
  const comment = commentTemplate.cloneNode(true);
  const img = comment.querySelector('.social__picture');
  img.src = data.avatar;
  img.alt = data.name;
  const text = comment.querySelector('.social__text');
  text.textContent = data.message;
  commentsFragment.append(comment);
};
const onLoadNewCommentsButtonClicked = () => {
  const unloadedCommentsCount = comments.length - loadedCommentsCount;
  const stopIndex = unloadedCommentsCount >= COMMENTS_AT_ONCE_LOAD_COUNT ? loadedCommentsCount + COMMENTS_AT_ONCE_LOAD_COUNT : loadedCommentsCount + unloadedCommentsCount;
  for (let i = loadedCommentsCount; i < stopIndex; i++) {
    comments[i].classList.remove('hidden');
  }
  loadedCommentsCount = stopIndex;
  commentsRange.textContent = `${loadedCommentsCount} из ${comments.length} комментариев`;
};
const loadFirstComments = () => {
  for (let i = COMMENTS_AT_ONCE_LOAD_COUNT; i < comments.length; i++) {
    comments[i].classList.add('hidden');
  }
};
const fillCommentsWithData = (data) => {
  const commentsFragment = document.createDocumentFragment();
  data.forEach((comment) => fillCommentWithData(comment, commentsFragment));
  commentsList.appendChild(commentsFragment);
};

const clearComments = () => {
  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }
};

const fillBigPictureWithData = (data) => {
  const img = bigPicture.querySelector('.big-picture__img > img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const description = bigPicture.querySelector('.social__caption');
  clearComments();
  img.src = data.url;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  description.textContent = data.description;
  fillCommentsWithData(data.comments);
};

const bigPictureVisualizer = makeVisualizer(bigPicture);

bigPictureButtonClose.addEventListener('click', bigPictureVisualizer.hide);

miniatures.addEventListener('click', (evt) => {
  if (evt.target.matches('.picture__img')) {
    bigPictureVisualizer.show();
    const miniatureData = findMiniatureData(photos, evt.target.src);
    fillBigPictureWithData(miniatureData);
    loadFirstComments();
  }
});

commentsLoaderButton.addEventListener('click', onLoadNewCommentsButtonClicked);

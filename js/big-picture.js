import {findMiniatureData} from './utils.js';
import {makeVisualizer} from './make-visualizer.js';
import {COMMENTS_AT_ONCE_LOAD_COUNT} from './constants.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureButtonClose = bigPicture.querySelector('.cancel');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const commentTemplate = bigPicture.querySelector('.social__comment');
const commentsContainer = bigPicture.querySelector('.social__comments');
const comments = commentsContainer.children;
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
const showLoaderButton = () => {
  if (loadedCommentsCount === comments.length) {
    commentsLoaderButton.classList.add('hidden');
  }else {
    commentsLoaderButton.classList.remove('hidden');
  }
};
const onLoadNewCommentsButtonClick = () => {
  const unloadedCommentsCount = comments.length - loadedCommentsCount;
  const stopIndex = unloadedCommentsCount >= COMMENTS_AT_ONCE_LOAD_COUNT ? loadedCommentsCount + COMMENTS_AT_ONCE_LOAD_COUNT : loadedCommentsCount + unloadedCommentsCount;
  for (let i = loadedCommentsCount; i < stopIndex; i++) {
    comments[i].classList.remove('hidden');
  }
  loadedCommentsCount = stopIndex;
  commentsRange.textContent = `${loadedCommentsCount} из ${comments.length} комментариев`;
  showLoaderButton();
};
const loadFirstComments = () => {
  for (let i = COMMENTS_AT_ONCE_LOAD_COUNT; i < comments.length; i++) {
    comments[i].classList.add('hidden');
  }
};
const fillCommentsWithData = (data) => {
  const commentsFragment = document.createDocumentFragment();
  data.forEach((comment) => fillCommentWithData(comment, commentsFragment));
  commentsContainer.appendChild(commentsFragment);
};

const clearComments = () => {
  while (commentsContainer.firstChild) {
    commentsContainer.removeChild(commentsContainer.firstChild);
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

const updateCommentsRangeField = () => {
  loadedCommentsCount = comments.length >= COMMENTS_AT_ONCE_LOAD_COUNT ? COMMENTS_AT_ONCE_LOAD_COUNT : comments.length;
  commentsRange.textContent = `${loadedCommentsCount} из ${comments.length} комментариев`;
  showLoaderButton();
};
const bigPictureVisualizer = makeVisualizer(bigPicture);

bigPictureButtonClose.addEventListener('click', bigPictureVisualizer.hide);

const onMiniatureClick = (pictures, evt) => {
  if (evt.target.matches('.picture__img')) {
    bigPictureVisualizer.show();
    const miniatureData = findMiniatureData(pictures, evt.target.src);
    fillBigPictureWithData(miniatureData);
    loadFirstComments();
    updateCommentsRangeField();
  }
};

commentsLoaderButton.addEventListener('click', onLoadNewCommentsButtonClick);

export {onMiniatureClick};

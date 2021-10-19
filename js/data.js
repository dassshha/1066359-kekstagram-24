import {getRandomNumber, getRandomNumberExcept} from './utils.js';
import {COMMENTS_COUNT, PHOTO_INDEX_MAX_COUNT, NAMES, MESSAGES, DESCRIPTIONS} from './mock.js';

const createMessage = (messages) => {
  const messagesCount = getRandomNumber(1, 2);
  if (messagesCount === 1){
    const messageIndex = getRandomNumber(0, messages.length - 1);
    return messages[messageIndex];
  }
  const messageIndex1 = getRandomNumber(0, messages.length - 1);
  const messageIndex2 = getRandomNumberExcept(0, messages.length - 1, messageIndex1);
  return [messages[messageIndex1], messages[messageIndex2]].join(' ');

};
const createComment = (commentIndex) => {
  const avatarIndex = getRandomNumber(1, 6);
  const nameIndex = getRandomNumber(0, NAMES.length - 1);
  return{
    'id': commentIndex,
    'avatar': `img/avatar-${avatarIndex}.svg`,
    'message': createMessage(MESSAGES),
    'name': NAMES[nameIndex],
  };
};
const createPhoto = (photoIndex) => {
  const descriptionIndex = getRandomNumber(0, DESCRIPTIONS.length - 1);
  const likesCount = getRandomNumber(15, 200);
  const commentsCount = getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max);
  return {
    'id': photoIndex,
    'url': `photos/${photoIndex}.jpg`,
    'description': DESCRIPTIONS[descriptionIndex],
    'likes': likesCount,
    'comments': Array.from({length: commentsCount}, (value, commentIndex) => createComment(commentIndex + 1)),
  };
};
const createPhotos = () => Array.from({length: PHOTO_INDEX_MAX_COUNT}, (value, photoIndex) => createPhoto(photoIndex + 1));

export {createPhotos};

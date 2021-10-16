'use strict';

const COMMENTS_MIN_COUNT = 1;
const COMMENTS_MAX_COUNT = 5;
const PHOTO_INDEX_MAX_COUNT = 25;
const NAMES = [
  'Иван',
  'Мария',
  'Ольга',
  'Евгений',
  'Николай',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
];

const getRandomNumber = (min, max) => {
  min = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  max = Math.floor(Math.max(Math.abs(min),Math.abs(max)));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const checkStrFitsMaxLength = (str, maxLength) => str.length <= maxLength;
const getRandomNumberExcept = (min, max, canceledNum) => {
  const randomNum = getRandomNumber(min, max);
  return randomNum === canceledNum ? getRandomNumberExcept(min, max, canceledNum) : randomNum;
};
const createMessage = () => {
  const messagesCount = getRandomNumber(1, 2);
  if (messagesCount === 1){
    const messageIndex = getRandomNumber(0, MESSAGES.length - 1);
    return MESSAGES[messageIndex];
  }
  const messageIndex1 = getRandomNumber(0, MESSAGES.length - 1);
  const messageIndex2 = getRandomNumberExcept(0, MESSAGES.length - 1, messageIndex1);
  return [MESSAGES[messageIndex1], MESSAGES[messageIndex2]].join(' ');

};
const createComment = (commentIndex) => {
  const avatarIndex = getRandomNumber(1, 6);
  const nameIndex = getRandomNumber(0, NAMES.length - 1);
  return{
    'id': commentIndex,
    'avatar': `img/avatar-${avatarIndex}.svg`,
    'message': createMessage(),
    'name': NAMES[nameIndex],
  };
};
const createPhoto = (photoIndex) => {
  const descriptionIndex = getRandomNumber(0, DESCRIPTIONS.length - 1);
  const likesCount = getRandomNumber(15, 200);
  const commentsCount = getRandomNumber(COMMENTS_MIN_COUNT, COMMENTS_MAX_COUNT);
  return {
    'id': photoIndex,
    'url': `photos/${photoIndex}.jpg`,
    'description': DESCRIPTIONS[descriptionIndex],
    'likes': likesCount,
    'comments': Array.from({length: commentsCount}, (value, commentIndex) => createComment(commentIndex + 1)),
  };
};
const createPhotos = () => Array.from({length: PHOTO_INDEX_MAX_COUNT}, (value, photoIndex) => createPhoto(photoIndex + 1));

getRandomNumber(2, 5);
checkStrFitsMaxLength('hello',140);
createPhotos();


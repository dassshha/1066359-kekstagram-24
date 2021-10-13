const MESSAGE = 'Всё отлично!';
const COMMENTS_MIN_COUNT = 1;
const COMMENTS_MAX_COUNT = 5;
const PHOTOS_LENGTH = 25;
const NAMES = [
  'Иван',
  'Мария',
  'Ольга',
  'Евгений',
  'Николай',
];
const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
];

const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 ){
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const checkStrFitsMaxLength = (str, maxLength) => str.length <= maxLength;

const createComment = (commentIndex) => {
  const avatarIndex = getRandomNumber(1, 6);
  const nameIndex = getRandomNumber(0, NAMES.length - 1);
  return{
    'id': commentIndex,
    'avatar': `img/avatar-${avatarIndex}.svg`,
    'message': MESSAGE,
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
const createPhotos = () => Array.from({length: PHOTOS_LENGTH}, (value, photoIndex) => createPhoto(photoIndex + 1));

getRandomNumber(2, 5);
checkStrFitsMaxLength('hello',140);
createPhotos();


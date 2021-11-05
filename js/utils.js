const ERRORS = {
  UNIQUE_ERROR: 'Один и тот же хэш-тег не может быть использован дважды!',
  MAX_COUNT_ERROR: 'Нельзя указать больше пяти хэш-тегов!',
  CORRECT_TITLE_ERROR: 'Неправильный формат хэш-тега!',
  MAX_LENGTH_ERROR: 'Длина комментария не может составлять больше 140 символов!',
};
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
const isEscapeKey = (evt) => evt.key === 'Escape';
const findMiniatureData = (miniatures, src) => miniatures.find((item) => src.endsWith(item.url));

export {getRandomNumber, getRandomNumberExcept, checkStrFitsMaxLength, isEscapeKey, findMiniatureData, ERRORS};

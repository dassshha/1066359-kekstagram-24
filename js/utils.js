
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
const takeNumberFromScaleFieldString = (scaleField) => Number(scaleField.slice(0,scaleField.indexOf('%')));
const takeEffectFromString = (str) => str.slice(str.indexOf('-'));

export {getRandomNumber, getRandomNumberExcept, checkStrFitsMaxLength, isEscapeKey, findMiniatureData, takeNumberFromScaleFieldString, takeEffectFromString};

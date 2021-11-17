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
const takeEffectFromString = (str) => str.slice(str.indexOf('-'));
const formatToFloat = (value) => value.toFixed(1);

const formatToInt = (value) => value.toFixed(0);

const showResponseFromServerError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'tomato';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {getRandomNumber, getRandomNumberExcept, checkStrFitsMaxLength, isEscapeKey, findMiniatureData, takeEffectFromString, formatToFloat, formatToInt, showResponseFromServerError};

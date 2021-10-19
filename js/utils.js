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

export {getRandomNumber, getRandomNumberExcept, checkStrFitsMaxLength};

function getRandomNumber(min, max) {
  if (min < 0 || max < 0 ){
    return undefined;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStrFitsMaxLength(str, maxLength){
  return str.length <= maxLength;
}

getRandomNumber(2, 5);
checkStrFitsMaxLength('hello',140);


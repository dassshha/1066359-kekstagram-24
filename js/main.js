function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStrMaxLength(str, maxLength){
  return str.length <= maxLength;
}

getRandomIntInclusive(2, 5);
checkStrMaxLength('hello',140);


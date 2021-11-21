import {SCALE_VALUE} from './constants.js';

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview > img');


const decrementScaleValue = (value) => {
  if (value > SCALE_VALUE.MIN) {
    value -= SCALE_VALUE.STEP;
    scaleField.value = `${value}%`;
  }
  return value;
};

const incrementScaleValue = (value) => {
  if (value < SCALE_VALUE.MAX) {
    value += SCALE_VALUE.STEP;
    scaleField.value = `${value}%`;
  }
  return value;
};

scaleSmallerButton.addEventListener('click', () => {
  let scaleFieldValue = parseInt(scaleField.value, 10);
  scaleFieldValue = decrementScaleValue(scaleFieldValue);
  img.style.transform = `scale(${(scaleFieldValue/100).toFixed(2)})`;
});

scaleBiggerButton.addEventListener('click', () => {
  let scaleFieldValue = parseInt(scaleField.value, 10);
  scaleFieldValue = incrementScaleValue(scaleFieldValue);
  img.style.transform = `scale(${(scaleFieldValue/100).toFixed(2)})`;
});

export {scaleField, img};

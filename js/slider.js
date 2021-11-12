import {effect} from './effects.js';

const slider = document.querySelector('.effect-level__slider');
const valueField = document.querySelector('.effect-level__value');
const img = document.querySelector('.img-upload__preview');

valueField.value = 30;

const formatToFloat = (value) => value.toFixed(1);
const formatFromFloat = (value) => parseFloat(value);

const formatToInt = (value) => value.toFixed(0);
const formatFromInt = (value) => Number(value);

const changeEffect = (min, max, step, formatToFunc, formatFromFunc) => slider.noUiSlider.updateOptions({
  range: {
    min: min,
    max: max,
  },
  start: max,
  step: step,
  format : {
    to: (value) => formatToFunc(value),
    from: (value) => formatFromFunc(value),
  },
});
const changeChromeEffect = () => {
  changeEffect(0, 1, 0.1, formatToFloat, formatFromFloat);
  slider.classList.remove('hidden');
};

const changeSepiaEffect = () => {
  changeEffect(0, 1, 0.1 , formatToFloat, formatFromFloat);
  slider.classList.remove('hidden');
};

const changeMarvinEffect = () => {
  changeEffect(0, 100, 1, formatToInt, formatFromInt);
  slider.classList.remove('hidden');
};

const changePhobosEffect = () => {
  changeEffect(0, 3, 0.1, formatToFloat, formatFromFloat);
  slider.classList.remove('hidden');
};

const changeHeatEffect = () => {
  changeEffect(1, 3, 0.1, formatToFloat, formatFromFloat);
  slider.classList.remove('hidden');
};

const changeNoneEffect = () => {
  slider.classList.add('hidden');
  img.style.filter = 'none';
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

slider.noUiSlider.on('update', (values, handle) => {
  valueField.value = values[handle];
  if (effect === '-chrome') {
    img.style.filter = `grayscale(${values[handle]})`;
  }
  if (effect === '-heat') {
    img.style.filter = `brightness(${values[handle]})`;
  }
  if (effect === '-marvin') {
    img.style.filter = `invert(${values[handle]}%)`;
  }
  if (effect === '-phobos') {
    img.style.filter = `blur(${values[handle]}px)`;
  }
  if (effect === '-sepia') {
    img.style.filter = `sepia(${values[handle]})`;
  }
});

slider.classList.add('hidden');

export {slider, changeChromeEffect, changeHeatEffect, changeMarvinEffect, changePhobosEffect, changeSepiaEffect, changeNoneEffect};



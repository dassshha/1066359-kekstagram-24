import {effect} from './effects.js';
import {formatToFloat} from './utils.js';
import {CHROME_EFFECT, SEPIA_EFFECT, PHOBOS_EFFECT, MARVIN_EFFECT, HEAT_EFFECT} from './constants.js';

const slider = document.querySelector('.effect-level__slider');
const valueField = document.querySelector('.effect-level__value');
const img = document.querySelector('.img-upload__preview');

const changeEffect = (titleEffect) => slider.noUiSlider.updateOptions({
  range: {
    min: titleEffect.MIN,
    max: titleEffect.MAX,
  },
  start: titleEffect.MAX,
  step: titleEffect.STEP,
  format : {
    to: titleEffect.FORMAT_TO_CB,
    from: titleEffect.FORMAT_FROM_CB,
  },
});
const changeChromeEffect = () => {
  changeEffect(CHROME_EFFECT);
  slider.classList.remove('hidden');
};

const changeSepiaEffect = () => {
  changeEffect(SEPIA_EFFECT);
  slider.classList.remove('hidden');
};

const changeMarvinEffect = () => {
  changeEffect(MARVIN_EFFECT);
  slider.classList.remove('hidden');
};

const changePhobosEffect = () => {
  changeEffect(PHOBOS_EFFECT);
  slider.classList.remove('hidden');
};

const changeHeatEffect = () => {
  changeEffect(HEAT_EFFECT);
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
    to: formatToFloat,
    from: parseFloat,
  },
});

slider.noUiSlider.on('update', (values, handle) => {
  valueField.value = values[handle];
  if (effect === CHROME_EFFECT.TITLE) {
    img.style.filter = `grayscale(${values[handle]})`;
  }
  if (effect === HEAT_EFFECT.TITLE) {
    img.style.filter = `brightness(${values[handle]})`;
  }
  if (effect === MARVIN_EFFECT.TITLE) {
    img.style.filter = `invert(${values[handle]}%)`;
  }
  if (effect === PHOBOS_EFFECT.TITLE) {
    img.style.filter = `blur(${values[handle]}px)`;
  }
  if (effect === SEPIA_EFFECT.TITLE) {
    img.style.filter = `sepia(${values[handle]})`;
  }
});

slider.classList.add('hidden');

export {slider, changeChromeEffect, changeHeatEffect, changeMarvinEffect, changePhobosEffect, changeSepiaEffect, changeNoneEffect};



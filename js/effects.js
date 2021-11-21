import {takeEffectFromString} from './utils.js';
import {
  changeSepiaEffect,
  changePhobosEffect,
  changeMarvinEffect,
  changeHeatEffect,
  changeChromeEffect,
  changeNoneEffect
} from './slider.js';

const effectsList = document.querySelector('.effects__list');
const img = document.querySelector('.img-upload__preview > img');
let effect = '-none';


effectsList.addEventListener('change', (evt) => {
  if (evt.target.matches('.effects__radio')) {
    effect = takeEffectFromString(evt.target.id);
    img.className = `img-upload__preview effects__preview-${effect}`;
    if (effect === '-chrome') {
      changeChromeEffect();
    } else if (effect === '-heat') {
      changeHeatEffect();
    } else if (effect === '-marvin') {
      changeMarvinEffect();
    } else if (effect === '-phobos') {
      changePhobosEffect();
    } else if (effect === '-sepia') {
      changeSepiaEffect();
    } else {
      changeNoneEffect();
    }
  }
});


export {effect};


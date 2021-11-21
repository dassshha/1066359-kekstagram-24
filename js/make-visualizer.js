import {isEscapeKey} from './utils.js';
import {slider} from './slider.js';

const body = document.querySelector('body');
const scaleField = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const uploadField = document.querySelector('.img-upload__input');

const setInitialValues = () => {
  scaleField.value = '100%';
  img.style.transform = 'scale(1)';
  img.className = 'img-upload__preview';
  slider.classList.add('hidden');
  img.style.filter = 'none';
  hashtagField.value = '';
  commentField.value = '';
  uploadField.value = '';
};
const makeVisualizer = (popup) => {
  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hidePopup();
    }
  };
  const onBackgroundClick = (evt) => {
    if (evt.target.matches('.success') || evt.target.matches('.error')) {
      hidePopup();
    }
  };
  const showPopup = () => {
    popup.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeydown);
  };
  function hidePopup () {
    setInitialValues();
    popup.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
  }
  return {
    show: (onBackgroundClickCbExist) => {
      if (onBackgroundClickCbExist){
        document.addEventListener('click', onBackgroundClick);
      }
      showPopup();
    },
    hide: (onBackgroundClickCbExist) =>  {
      if (onBackgroundClickCbExist) {
        document.removeEventListener('click', onBackgroundClick);
      }
      hidePopup();
    },
  };
};

export {makeVisualizer};


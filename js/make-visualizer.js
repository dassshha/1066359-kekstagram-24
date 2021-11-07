import {isEscapeKey} from './utils.js';
const body = document.querySelector('body');

const makeVisualizer = (popup) => {
  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      hidePopup();
    }
  };
  const showPopup = () => {
    popup.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEscKeydown);
  };
  function hidePopup () {
    popup.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
  }
  return {
    show: () => showPopup(),
    hide: () =>  hidePopup(),
  };
};

export {makeVisualizer};


import {makeVisualizer} from './make-visualizer.js';
import {sendData} from './api.js';
import {showResponseFromServerError} from './utils.js';
import {errorMessageVisualizer, successMessageVisualizer} from './success-error-message.js';

const fileLoadButton = document.querySelector('#upload-file');
const photoEditForm = document.querySelector('.img-upload__overlay');
const photoSubmitForm = document.querySelector('.img-upload__form');
const closeFormButton = photoEditForm.querySelector('#upload-cancel');

const formVisualizer = makeVisualizer(photoEditForm);


fileLoadButton.addEventListener('change', formVisualizer.show);

closeFormButton.addEventListener('click', formVisualizer.hide);

const setFormSubmit = (onSuccess, onError) => {
  photoSubmitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onError(),
      new FormData(evt.target),
    );
  });
};
setFormSubmit(()=> {
  formVisualizer.hide();
  successMessageVisualizer.show('onBackgroundClick');
  }, () => {
  formVisualizer.hide();
  errorMessageVisualizer.show('onBackgroundClick');
});

export {photoEditForm};



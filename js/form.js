import {makeVisualizer} from './make-visualizer.js';
import {scaleField, img} from './scale.js';
import {slider} from './slider.js';

const fileLoadButton = document.querySelector('#upload-file');
const photoEditForm = document.querySelector('.img-upload__overlay');
const closeFormButton = photoEditForm.querySelector('#upload-cancel');

const formVisualizer = makeVisualizer(photoEditForm);

const updateInitialValues = () => {
  scaleField.value = '100%';
  img.style.transform = 'scale(1)';
  img.className = 'img-upload__preview';
  slider.classList.add('hidden');
  img.style.filter = 'none';
};

fileLoadButton.addEventListener('change', () => {
  updateInitialValues();
  formVisualizer.show();
});

closeFormButton.addEventListener('click', formVisualizer.hide);

export {photoEditForm};



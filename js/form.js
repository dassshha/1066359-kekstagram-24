import {makeVisualizer} from './make-visualizer.js';


const fileLoadButton = document.querySelector('#upload-file');
const photoEditForm = document.querySelector('.img-upload__overlay');
const closeFormButton = photoEditForm.querySelector('#upload-cancel');

const formVisualizer = makeVisualizer(photoEditForm);

fileLoadButton.addEventListener('change', formVisualizer.show);

closeFormButton.addEventListener('click', formVisualizer.hide);

export {photoEditForm};



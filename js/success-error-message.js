import {makeVisualizer} from './make-visualizer.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');


const createSuccessMessage = () => {
  const message = successMessageTemplate.cloneNode(true);
  body.appendChild(message);
};

const createErrorMessage = () => {
  const message = errorMessageTemplate.cloneNode(true);
  body.appendChild(message);
};
createSuccessMessage();
createErrorMessage();
const successMessage = document.querySelector('.success');
const errorMessage = document.querySelector('.error');
successMessage.classList.add('hidden');
errorMessage.classList.add('hidden');
const exitSuccessMessageButton = successMessage.querySelector('.success__button');
const exitErrorMessageButton = errorMessage.querySelector('.error__button');
const successMessageVisualizer = makeVisualizer(successMessage);
const errorMessageVisualizer = makeVisualizer(errorMessage);
exitSuccessMessageButton.addEventListener('click', () => successMessageVisualizer.hide());
exitErrorMessageButton.addEventListener('click', () => errorMessageVisualizer.hide());
export {successMessageVisualizer, errorMessageVisualizer};

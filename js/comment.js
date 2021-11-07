import {checkStrFitsMaxLength} from './utils.js';
import {photoEditForm} from './form.js';
import {MAX_COMMENT_LENGTH, ERRORS} from './constants.js';

const commentField = photoEditForm.querySelector('.text__description');

commentField.addEventListener('input', () => {
  if (!checkStrFitsMaxLength(commentField.value, MAX_COMMENT_LENGTH)) {
    commentField.setCustomValidity(ERRORS.MAX_LENGTH_ERROR);
    commentField.classList.add('warning');
  } else {
    commentField.setCustomValidity('');
    commentField.classList.remove('warning');
  }
  commentField.reportValidity();
});

commentField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});


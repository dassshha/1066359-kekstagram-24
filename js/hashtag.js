import {ERRORS} from './constants.js';
import {photoEditForm} from './form.js';
import {MAX_HASHTAGS_COUNT} from './constants.js';


const hashtagField = photoEditForm.querySelector('.text__hashtags');

const checkIfHashtagsFitMaxCount = (hashtags) => hashtags.length <= MAX_HASHTAGS_COUNT;

const checkTwoSameHashtags = (hashtags) => {
  const hashtagsSet = new Set(hashtags);
  return hashtagsSet.size === hashtags.length;
};

const checkIfHashtagSymbolsValid = (hashtags) => {
  const re = /^#[A-Za-zА-яа-яЁё0-9]{1,19}$/;
  for (let i = 0;i < hashtags.length; i++) {
    if (!re.test(hashtags[i])) {
      return false;
    }
  }
  return true;
};

hashtagField.addEventListener('input', ()=> {
  const hashtags = hashtagField.value.split(' ');

  if (!checkIfHashtagsFitMaxCount(hashtags)) {
    hashtagField.setCustomValidity(ERRORS.MAX_COUNT_ERROR);
    hashtagField.classList.add('warning');
  } else if (!checkTwoSameHashtags(hashtags)) {
    hashtagField.setCustomValidity(ERRORS.UNIQUE_ERROR);
    hashtagField.classList.add('warning');
  } else if (!checkIfHashtagSymbolsValid(hashtags)) {
    hashtagField.setCustomValidity(ERRORS.CORRECT_TITLE_ERROR);
    hashtagField.classList.add('warning');
  } else {
    hashtagField.setCustomValidity('');
    hashtagField.classList.remove('warning');
  }
  hashtagField.reportValidity();
});

hashtagField.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

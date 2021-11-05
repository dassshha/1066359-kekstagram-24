import {ERRORS} from './utils.js';
import {photoEditForm} from './form.js';


const MAX_HASHTAGS_COUNT = 5;
const hashtagField = photoEditForm.querySelector('.text__hashtags');

const checkHashtagsFitsMaxCount = (hashtags) => hashtags.length <= MAX_HASHTAGS_COUNT;

const checkTwoSameHashtags = (hashtags) => {
  const hashtagsSet = new Set(hashtags);
  return hashtagsSet.size === hashtags.length;
};

const checkCorrectHashtags = (hashtags) => {
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

  if (!checkHashtagsFitsMaxCount(hashtags)) {
    hashtagField.setCustomValidity(ERRORS.MAX_COUNT_ERROR);
    hashtagField.classList.add('warning');
  } else if (!checkTwoSameHashtags(hashtags)) {
    hashtagField.setCustomValidity(ERRORS.UNIQUE_ERROR);
    hashtagField.classList.add('warning');
  } else if (!checkCorrectHashtags(hashtags)) {
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

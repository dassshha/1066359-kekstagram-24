const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const COMMENTS_AT_ONCE_LOAD_COUNT = 5;
const ERRORS = {
  UNIQUE_ERROR: 'Один и тот же хэш-тег не может быть использован дважды!',
  MAX_COUNT_ERROR: 'Нельзя указать больше пяти хэш-тегов!',
  CORRECT_TITLE_ERROR: 'Неправильный формат хэш-тега!',
  MAX_LENGTH_ERROR: 'Длина комментария не может составлять больше 140 символов!',
};

export {MAX_COMMENT_LENGTH, MAX_HASHTAGS_COUNT, ERRORS, COMMENTS_AT_ONCE_LOAD_COUNT};

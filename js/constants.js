import {formatToInt, formatToFloat} from './utils.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const COMMENTS_AT_ONCE_LOAD_COUNT = 5;
const ERRORS = {
  UNIQUE_ERROR: 'Один и тот же хэш-тег не может быть использован дважды!',
  MAX_COUNT_ERROR: 'Нельзя указать больше пяти хэш-тегов!',
  CORRECT_TITLE_ERROR: 'Неправильный формат хэш-тега!',
  MAX_LENGTH_ERROR: 'Длина комментария не может составлять больше 140 символов!',
};
const SCALE_VALUE = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};
const CHROME_EFFECT = {
  TITLE: '-chrome',
  MIN: 0,
  MAX: 1,
  STEP: 0.1,
  FORMAT_TO_CB: formatToFloat,
  FORMAT_FROM_CB: parseFloat,
};
const SEPIA_EFFECT = {
  TITLE: '-sepia',
  MIN: 0,
  MAX: 1,
  STEP: 0.1,
  FORMAT_TO_CB: formatToFloat,
  FORMAT_FROM_CB: parseFloat,
};
const MARVIN_EFFECT = {
  TITLE: '-marvin',
  MIN: 0,
  MAX: 100,
  STEP: 1,
  FORMAT_TO_CB: formatToInt,
  FORMAT_FROM_CB: Number,
};
const PHOBOS_EFFECT = {
  TITLE: '-phobos',
  MIN: 0,
  MAX: 3,
  STEP: 0.1,
  FORMAT_TO_CB: formatToFloat,
  FORMAT_FROM_CB: parseFloat,
};
const HEAT_EFFECT = {
  TITLE: '-heat',
  MIN: 1,
  MAX: 3,
  STEP: 0.1,
  FORMAT_TO_CB: formatToFloat,
  FORMAT_FROM_CB: parseFloat,
};
const ALERT_SHOW_TIME = 5000;
const GET_SERVER_ADDRESS = 'https://24.javascript.pages.academy/kekstagram/data';
const POST_SERVER_ADDRESS = 'https://24.javascript.pages.academy/kekstagram';
export {MAX_COMMENT_LENGTH, MAX_HASHTAGS_COUNT, ERRORS, COMMENTS_AT_ONCE_LOAD_COUNT, SCALE_VALUE, CHROME_EFFECT, HEAT_EFFECT, MARVIN_EFFECT, PHOBOS_EFFECT, SEPIA_EFFECT, GET_SERVER_ADDRESS, POST_SERVER_ADDRESS, ALERT_SHOW_TIME};

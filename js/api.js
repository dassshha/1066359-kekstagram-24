import {GET_SERVER_ADDRESS, POST_SERVER_ADDRESS} from './constants.js';

const getData = (onSuccess, onError) => {
  fetch(GET_SERVER_ADDRESS)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    POST_SERVER_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch((err) => {
      onError(err);
    });
};

export {getData, sendData};

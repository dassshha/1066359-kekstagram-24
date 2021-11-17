const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');

const createSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  body.appendChild(successMessage);
};

export {createSuccessMessage};

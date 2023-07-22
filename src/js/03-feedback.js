import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

formEl.addEventListener('input', throttle(onInput, 500));
const { email, message } = formEl.elements;
updateOutput();

function onInput(evt) {
  savedData = {
    Email: email.value,
    Message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(savedData));
}

function updateOutput() {
  if (savedData) {
    formEl.elements.email.value = savedData.Email || '';
    formEl.elements.message.value = savedData.Message || '';
  }

  formEl.addEventListener('submit', onSubmit);

  function onSubmit(evt) {
    evt.preventDefault();

    if (
      formEl.elements.email.value === '' ||
      formEl.elements.message.value === ''
    ) {
      return alert('Please fill in all the fields!');
    }
    console.log(savedData);
    localStorage.removeItem('feedback-form-state');
    evt.currentTarget.reset();
    savedData = {};
  }
}

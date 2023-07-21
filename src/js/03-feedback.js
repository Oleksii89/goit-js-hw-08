import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

updateOutput();

formEl.addEventListener('input', throttle(onInput, 500));
function onInput(evt) {
  let { email, message } = formEl.elements;

  const data = {
    Email: email.value,
    Message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function updateOutput() {
  if (savedData) {
    formEl.elements.email.value = savedData.Email || '';
    formEl.elements.message.value = savedData.Message || '';
  }

  formEl.addEventListener('submit', onSubmit);

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(savedData);
    localStorage.removeItem('feedback-form-state');
    formEl.reset();
  }
}

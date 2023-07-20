import throttle from 'lodash.throttle';

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
//  у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".

const formEl = document.querySelector('.feedback-form');
console.log(formEl);

formEl.addEventListener('input', onInput);
function onInput(evt) {
  console.log(evt.target.value);

  const {
    elements: { email, message },
  } = evt.currentTarget;

  const data = {
    Email: email.value,
    Message: message.value,
  };
  console.log(data);
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

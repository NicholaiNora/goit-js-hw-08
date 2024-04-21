var _ = require('lodash');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('label [name="email"]');
const messageText = document.querySelector('label [name="message"]');

function createData() {
  const emailValue = form.elements.email.value;
  const messageValue = form.elements.message.value;

  return (formData = {
    email: emailValue,
    message: messageValue,
  });
}
form.addEventListener(
  'input',
  _.throttle(() => {
    createData();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

function savedData() {
  try {
    const data = JSON.parse(localStorage.getItem('feedback-form-state') ?? '');
    emailInput.value = data.email;
    messageText.value = data.message;
  } catch (error) {}
}
savedData();

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  if (emailInput.value !== '' && messageText.value !== '') {
    console.log(createData());
  }
  form.reset();
});

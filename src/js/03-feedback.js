const form = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);

function onFormInput(e) {
  const inputValue = e.currentTarget.elements.email.value;
  const messageValue = e.currentTarget.elements.message.value;
  const formValue = {
    inputValue,
    messageValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    console.log(formData);
  }

  localStorage.removeItem('feedback-form-state');
}

function checkLocaleStorage() {
  const savedValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedValue) {
    form.elements.email.value = savedValue.inputValue;
    form.elements.message.value = savedValue.messageValue;
  }
}
checkLocaleStorage();

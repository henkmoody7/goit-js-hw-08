const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);

function onFormInput() {
  const inputValue = inputRef.value;
  const messageValue = messageRef.value;
  const formValue = {
    inputValue,
    messageValue,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formValue));
}

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (formData) {
    console.log(formData);
  }

  localStorage.removeItem(STORAGE_KEY);
}

function checkLocaleStorage() {
  const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedValue) {
    form.elements.email.value = savedValue.inputValue;
    form.elements.message.value = savedValue.messageValue;
  }
}
checkLocaleStorage();

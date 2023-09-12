'use strict';

const suscribeSection = document.querySelector('.js_suscribe');
const successSection = document.querySelector('.js_success');
const input = document.querySelector('.js_input');
const errorMsg = document.querySelector('.js_error');
const email = document.querySelector('.success__email');
const suscribeBtn = document.querySelector('.suscribe__btn');
const dismissBtn = document.querySelector('.success__btn');

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function handleSuscribeClick() {
  if (emailRegExp.test(input.value)) {
    suscribeSection.classList.add('hidden');
    successSection.classList.remove('hidden');
    errorMsg.classList.add('hidden');
    email.innerHTML = `${input.value}`;
    input.classList.remove('error-input');
  } else {
    errorMsg.classList.remove('hidden');
    input.classList.add('error-input');
  }
}

function handleSuccessClick() {
  successSection.classList.add('hidden');
  suscribeSection.classList.remove('hidden');
  input.value = '';
}

suscribeBtn.addEventListener('click', handleSuscribeClick);
dismissBtn.addEventListener('click', handleSuccessClick);

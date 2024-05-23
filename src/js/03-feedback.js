import throttle from 'lodash.throttle';

const registerForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const saveText = throttle((currentText) =>{
  let inputs = {
    email : emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(localStorageKey,JSON.stringify(inputs));
}, 500);

const emailInput = document.querySelector(".email");
emailInput.addEventListener("input", (event) =>{
  saveText(emailInput.value);
})

const messageInput = document.querySelector(".message");
messageInput.addEventListener("input", (event) =>{
  saveText(messageInput.value);
})

document.addEventListener("DOMContentLoaded", () =>{
  const savedData = localStorage.getItem(localStorageKey);
  
  const {email,message} = JSON.parse(savedData);
  
  emailInput.value = email;
  messageInput.value = message;
  
})
registerForm.addEventListener("submit", (event)=> {
  event.preventDefault();
  console.log(emailInput.value);
  console.log(messageInput.value);
  registerForm.reset();
  localStorage.clear();
});



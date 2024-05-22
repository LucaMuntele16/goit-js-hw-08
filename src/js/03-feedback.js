const registerForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

registerForm.addEventListener("submit", handleSubmit());


let inputs = {
  email : "",
  message: "",
};



const inputsJson = JSON.stringify(inputs);
localStorage.setItem(localStorageKey,inputsJson);


const inputFromLocalStorage = localStorage.getItem(localStorageKey);
const inputFromLocalStorageParsed = JSON.parse(inputFromLocalStorage);
console.log(inputFromLocalStorageParsed.email);




const emailInput = document.querySelector(".email");
emailInput.addEventListener("input", (event) => {
  localStorage.setItem("feedback-form-state", event.currentTarget.value);
  inputFromLocalStorageParsed.email = localStorage.getItem("feedback-form-state");
  console.log(inputFromLocalStorageParsed.email);
})


const messageInput = document.querySelector(".message");
messageInput.addEventListener("input", (event) => {
  localStorage.setItem("feedback-form-state", event.currentTarget.value);
  inputFromLocalStorageParsed.message = localStorage.getItem("feedback-form-state");
  console.log(inputFromLocalStorageParsed.message);
})



function handleSubmit(event) {

}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_IS_KEY = "userName";
const CLASSNAME_HIDDEN = "hidden";

function handleSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_IS_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(CLASSNAME_HIDDEN);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_IS_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", handleSubmit);
} else {
    paintGreetings(savedUsername);
}
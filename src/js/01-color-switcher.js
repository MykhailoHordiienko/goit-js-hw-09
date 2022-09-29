function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

let intervalId = null;

function onStartBtnClick() {
  intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startBtnRef.setAttribute('disabled', 'disabled');
  stopBtnRef.removeAttribute('disabled');
}

function onStopBtnClick() {
  clearInterval(intervalId);
  stopBtnRef.setAttribute('disabled', 'disabled');
  startBtnRef.removeAttribute('disabled');
}

import toastr from "toastr";
import "toastr/build/toastr.min.css";

const refs = {
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
    body: document.querySelector("body"),
}
const TIME_INTERVAL = 1000;
let intervalId = null;
let timerId = null;

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function changeBodyColor() { 
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
}

function onStartBtn() { 
    showSuccessNotification();
    refs.startBtn.setAttribute('disabled', true);
    intervalId = setInterval(changeBodyColor, TIME_INTERVAL);
};

function onStopBtn() { 
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
};

function showSuccessNotification() { 
    timerId = setTimeout(() => {
        toastr.success("Колорсвітчер запущено!");
    }, TIME_INTERVAL);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.startBtn.addEventListener("click", onStartBtn);
refs.stopBtn.addEventListener("click", onStopBtn);



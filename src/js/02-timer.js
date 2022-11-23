import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector("button[data-start]"),
  input: document.querySelector("#datetime-picker"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
};

let remainTime = null;
let currentTime = null;
let selectedTime = null;
let idInterval = null;

const options = {
  enableTime: true,        //включает выбор времени
  time_24hr: true,         //Displays time picker in 24 hour mode without AM/PM selection when enabled.
  defaultDate: new Date(), //Sets the initial selected date(s)
  minuteIncrement: 1,      //Adjusts the step for the minute input (incl. scrolling)
   onClose(selectedDates) {
    if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    console.log(selectedDates[0]);
    refs.startBtn.removeAttribute('disabled');
    selectedTime = selectedDates[0].getTime();
  },
};

flatpickr("#datetime-picker", options);


refs.startBtn.setAttribute('disabled', true);

function onCountdown(e) {
  idInterval = setInterval(() => {
    refs.input.setAttribute('disabled', true);
    currentTime = Date.now();
    remainTime = selectedTime - currentTime;
    changeCountdown(remainTime);
      if (remainTime < 1000) {
        stopCountdown();
    }
  }, 1000);
};

function stopCountdown() {
  clearInterval(idInterval);
}

function changeCountdown(time) {
  refs.days.textContent = pad(convertMs(time).days);
  refs.hours.textContent = pad(convertMs(time).hours);
  refs.minutes.textContent = pad(convertMs(time).minutes);
  refs.seconds.textContent = pad(convertMs(time).seconds);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};


refs.startBtn.addEventListener("click", onCountdown);



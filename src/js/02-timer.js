import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let remainTime = 0;
let currentTime = 0;
let selectedTime = 0;

const options = {
  enableTime: true,        //включает выбор времени
  time_24hr: true,         //Displays time picker in 24 hour mode without AM/PM selection when enabled.
  defaultDate: new Date(), //Sets the initial selected date(s)
  minuteIncrement: 1,      //Adjusts the step for the minute input (incl. scrolling)
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();
    currentTime = Date.now();
    if ((currentTime - selectedTime) > 0) {
      refs.startBtn.setAttribute('disabled', true);
      return alert("Please choose a date in the future");
    }
    else {
      refs.startBtn.removeAttribute('disabled');
    }
    console.log(selectedDates[0]);
    
  },
};

flatpickr("#datetime-picker", options);



const refs = {
  startBtn: document.querySelector("button[data-start]"),
  days: document.querySelector("data-days"),
  days: document.querySelector("data-hours"),
  days: document.querySelector("data-minutes"),
  days: document.querySelector("data-seconds"),
}

refs.startBtn.setAttribute('disabled', true);


function onCountdown(e) { 
  setInterval(() => {
    remainTime = selectedTime - currentTime;
    console.log(remainTime)
  }, 1000);
};

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


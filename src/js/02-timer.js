import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,        //включает выбор времени
  time_24hr: true,         //Displays time picker in 24 hour mode without AM/PM selection when enabled.
  defaultDate: new Date(), //Sets the initial selected date(s)
  minuteIncrement: 1,      //Adjusts the step for the minute input (incl. scrolling)
  onClose(selectedDates) {
    if ((Date.now() - selectedDates[0]) > 0) {
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
  console.log(e.currentTarget);
}


refs.startBtn.addEventListener("click", onCountdown);


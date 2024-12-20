
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";





// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const datetimePicker = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("button[data-start]");




let userSelectedDate = null;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {

    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      // window.alert("Please choose a date in the future");
      iziToast.error({
        message: "Please choose a date in the future",
        position: "topRight",
       });

      btnStart.disabled = true;
    }
    else {
      userSelectedDate = selectedDate;
      btnStart.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);


function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}




const daysData = document.querySelector("[data-days]");
const hoursData = document.querySelector("[data-hours]");
const minutesData = document.querySelector("[data-minutes]");
const secondsData = document.querySelector("[data-seconds]");

function updateTime({ days, hours, minutes, seconds }) {
  daysData.textContent = addLeadingZero(days);
  hoursData.textContent = addLeadingZero(hours);
  minutesData.textContent = addLeadingZero(minutes);
  secondsData.textContent = addLeadingZero(seconds);
}


btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  datetimePicker.disabled = true;


  const intervalId = setInterval(() => {
    const now = new Date();
    const diffTime = userSelectedDate - now;

    if (diffTime <= 0) {
      clearInterval(intervalId);
      datetimePicker.disabled = false;
      updateTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }
    const leftTime = convertMs(diffTime);
    updateTime(leftTime);
  }, 1000);
});









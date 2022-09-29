import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const startBtnRef = document.querySelector('[data-start]');
const timerRef = document.querySelector('.timer');

startBtnRef.setAttribute('disabled', 'disabled');

let TIMER_DEADLINE = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    TIMER_DEADLINE = selectedDates[0];
    if (selectedDates[0] <= new Date()) {
      Notify.failure('Please choose a date in the future', {
        position: 'center-center',
        backOverlay: true,
        clickToClose: true,
      });
      startBtnRef.setAttribute('disabled', 'disabled');
    } else {
      startBtnRef.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  intervalId: null,
  refs: {},

  start(ref, deadline) {
    this.intervalId = setInterval(() => {
      const delta = deadline.getTime() - Date.now();

      if (delta <= 1000) {
        clearInterval(this.intervalId);
        Notify.success('Countdown END', {
          position: 'center-center',
          backOverlay: true,
          clickToClose: true,
        });
      }

      const data = this.convertMs(delta);
      Object.entries(data).forEach(([name, value]) => {
        this.refs[name].textContent = this.twoCharacterNumber(value);
      });
    }, 1000);
    this.getReffs(ref);
    Notify.success('Countdown START', {
      position: 'center-center',
      backOverlay: true,
      clickToClose: true,
    });
  },

  twoCharacterNumber(value) {
    return String(value).padStart(2, '0');
  },

  getReffs(ref) {
    this.refs.days = ref.querySelector('[data-days]');
    this.refs.hours = ref.querySelector('[data-hours]');
    this.refs.minutes = ref.querySelector('[data-minutes]');
    this.refs.seconds = ref.querySelector('[data-seconds]');
  },
  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  },
};

function onStartBtnClick() {
  timer.start(timerRef, TIMER_DEADLINE);
}

startBtnRef.addEventListener('click', onStartBtnClick);

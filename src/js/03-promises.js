// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import 'flatpickr/dist/flatpickr.min.css';

// const notifyOptions = {
//   position: 'center-center',
//   backOverlay: true,
//   clickToClose: true,
// };

// let delay = 0;
// let step = 0;
// let amount = 0;
// let delayArr = [];
// window.alert('wefsdf');

// const delayRef = document.querySelector('[name="delay"]');
// const stepRef = document.querySelector('[name="step"]');
// const amountRef = document.querySelector('[name="amount"]');
// const submitRef = document.querySelector('[type="submit"]');

// delayRef.addEventListener('input', ev => (delay = ev.target.value));
// stepRef.addEventListener('input', ev => (step = ev.target.value));
// amountRef.addEventListener('input', ev => (amount = ev.target.value));
// submitRef.addEventListener('click', onSubmitClick);

// function onSubmitClick(evnt) {
//   evnt.preventDefault();
//   console.log('submit');
//   for (let i = 1; i <= amount; i++) {
//     let deleyFinal = Number(delay) + Number(step);
//     delayArr.push(step);

//     createPromise(i, deleyFinal);
//   }
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }

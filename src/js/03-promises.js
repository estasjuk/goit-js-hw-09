import Notiflix from 'notiflix';

const refs = {
  initialDelay: document.querySelector("input[name='delay']"),
  step: document.querySelector("input[name='step']"),
  amount: document.querySelector("input[name='amount']"),
  form: document.querySelector(".form"),
}

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  for (let number = 1; number <= refs.amount.value; number += 1) {
    const delayInterval = Number(refs.initialDelay.value) + number * Number(refs.step.value);
    createPromise(number, delayInterval)
      .then(onSuccess)
      .catch(onError)
  };
}

function onSuccess(result) { 
  Notiflix.Notify.success(result);
};

function onError(result) { 
  Notiflix.Notify.failure(result);
};

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
    if (shouldResolve) {
      resolve(`Fulfilled promise ${position} in ${delay}ms`);
    }
    reject(`Rejected promise ${position} in ${delay}ms`);
  }, delay)
  });
};





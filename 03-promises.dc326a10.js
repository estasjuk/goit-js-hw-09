function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("eWCmQ");const i={initialDelay:document.querySelector("input[name='delay']"),step:document.querySelector("input[name='step']"),amount:document.querySelector("input[name='amount']"),form:document.querySelector(".form")};function l(n){e(u).Notify.success(n)}function a(n){e(u).Notify.failure(n)}function f(e,n){return new Promise(((t,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&t(`Fulfilled promise ${e} in ${n}ms`),o(`Rejected promise ${e} in ${n}ms`)}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(let e=1;e<=i.amount.value;e+=1){const n=Number(i.initialDelay.value)+e*Number(i.step.value);f(e,n).then(l).catch(a)}}));
//# sourceMappingURL=03-promises.dc326a10.js.map

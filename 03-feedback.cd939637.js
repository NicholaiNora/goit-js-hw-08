!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("1WSnx"),o=document.querySelector(".feedback-form"),l=document.querySelector('label [name="email"]'),i=document.querySelector('label [name="message"]');function u(){var e=o.elements.email.value,t=o.elements.message.value;return formData={email:e,message:t}}o.addEventListener("input",n.throttle((function(){u(),localStorage.setItem("feedback-form-state",JSON.stringify(formData))}),500)),function(){try{var e,t=JSON.parse(null!==(e=localStorage.getItem("feedback-form-state"))&&void 0!==e?e:"");l.value=t.email,i.value=t.message}catch(e){}}(),o.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),""!==l.value&&""!==i.value&&console.log(u()),o.reset()}))}();
//# sourceMappingURL=03-feedback.cd939637.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequire4c75=o);var r=o("f1q41");const l=document.querySelector(".feedback-form"),n=document.querySelector('label [name="email"]'),s=document.querySelector('label [name="message"]');function i(){const e=l.elements.email.value,t=l.elements.message.value;return formData={email:e,message:t}}l.addEventListener("input",r.throttle((()=>{i(),localStorage.setItem("feedback-form-state",JSON.stringify(formData))}),500)),function(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state")??"");n.value=e.email,s.value=e.message}catch(e){}}(),l.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),""!==n.value&&""!==s.value&&console.log(i()),l.reset()}));
//# sourceMappingURL=03-feedback.f604387d.js.map
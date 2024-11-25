import"./assets/styles-BEgBez2J.js";import"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("form");r.addEventListener("submit",s);function s(e){e.preventDefault();const t=e.target.elements.delay.value,l=e.target.elements.state.value;new Promise((o,m)=>{setTimeout(()=>{l==="fulfilled"?o(t):m(t)},t)})}
//# sourceMappingURL=2-snackbar.js.map

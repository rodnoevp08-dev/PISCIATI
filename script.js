const counter = document.getElementById('counter');
let n = 666;

setInterval(() => {
  n++;
  counter.textContent = String(n).padStart(7, '0');
}, 2600);
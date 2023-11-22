let color = "#" + Math.random().toString(16).slice(2, 8);
let body = document.querySelector("body");
let sendColorTo = document.querySelector("#color");

body.style.backgroundColor = color;

sendColorTo.innerHTML = color;

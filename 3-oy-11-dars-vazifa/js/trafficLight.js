let red = document.getElementById("stop");
let yellow = document.getElementById("ready");
let green = document.getElementById("start");

function redLight() {
    red.classList.toggle("red");
}

function yellowLight() {
    yellow.classList.toggle("yellow");
}

function greenLight() {
    green.classList.toggle("green");
}

function tl() {
    setTimeout(() => {
        redLight();
    }, 0);

    setTimeout(() => {
        redLight();
        yellowLight();
    }, 5_000);

    setTimeout(() => {
        yellowLight();
        greenLight();
    }, 7_000);

    setTimeout(() => {
        greenLight();
        yellowLight();
    }, 12_000);

    setTimeout(() => {
        yellowLight();
    }, 14_000);
}

tl();
setInterval(tl, 14_000);

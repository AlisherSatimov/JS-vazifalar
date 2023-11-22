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

const wait = (time) => new Promise((res) => setTimeout(res, time));

async function tl() {
    redLight();
    await wait(3000);
    redLight();
    yellowLight();
    await wait(1000);
    yellowLight();
    greenLight();
    await wait(3000);
    greenLight();
    yellowLight();
    await wait(1000);
    yellowLight();
}
tl();
setInterval(tl, 8_000);

// function tl() {
//     setTimeout(() => {
//         redLight();
//     }, 0);

//     setTimeout(() => {
//         redLight();
//         yellowLight();
//     }, 5_000);

//     setTimeout(() => {
//         yellowLight();
//         greenLight();
//     }, 7_000);

//     setTimeout(() => {
//         greenLight();
//         yellowLight();
//     }, 12_000);

//     setTimeout(() => {
//         yellowLight();
//     }, 14_000);
// }

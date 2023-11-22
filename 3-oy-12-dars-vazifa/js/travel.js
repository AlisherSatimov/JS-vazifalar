let xorazm = document.querySelector(".xorazm");
let jizzax = document.querySelector(".jizzax");
let namangan = document.querySelector(".namangan");
let andijon = document.querySelector(".andijon");
let buxoro = document.querySelector(".buxoro");
let samarqand = document.querySelector(".samarqand");
let map = document.querySelector(".location");
let space = document.querySelector(".space");
let spendTime = document.querySelector(".time");
let transport = 0;
let time = 0;
let hour = 0;
let minute = 0;
let speed = 0;
let distance = 0;

xorazm.addEventListener("click", () => {
    map.innerHTML = "Xorazm";
    space.innerHTML = "1100km";
    distance = 1100;
    time = distance / speed;
    hour = Math.floor(time).toString(10);
    minute = Math.floor(60 / (100 / Number(time.toString(10).slice(2, 4))));
    spendTime.innerHTML = hour + " soat " + minute + " daqiqa";
});

jizzax.addEventListener("click", () => {
    map.innerHTML = "Jizzax";
    space.innerHTML = "200km";
    distance = 200;
    time = distance / speed;
    hour = Math.floor(time).toString(10);
    minute = Math.floor(60 / (100 / Number(time.toString(10).slice(2, 4))));
    spendTime.innerHTML = hour + " soat " + minute + " daqiqa";
});

namangan.addEventListener("click", () => {
    map.innerHTML = "Namangan";
    space.innerHTML = "280km";
    distance = 280;
    time = distance / speed;
    hour = Math.floor(time).toString(10);
    minute = Math.floor(60 / (100 / Number(time.toString(10).slice(2, 4))));
    spendTime.innerHTML = hour + " soat " + minute + " daqiqa";
});

andijon.addEventListener("click", () => {
    map.innerHTML = "Andijon";
    space.innerHTML = "350km";
    distance = 350;
    time = distance / speed;
    hour = Math.floor(time).toString(10);
    minute = Math.floor(60 / (100 / Number(time.toString(10).slice(2, 4))));
    spendTime.innerHTML = hour + " soat " + minute + " daqiqa";
});

buxoro.addEventListener("click", () => {
    map.innerHTML = "Buxoro";
    space.innerHTML = "570km";
    distance = 570;
    time = distance / speed;
    hour = Math.floor(time).toString(10);
    minute = Math.floor(60 / (100 / Number(time.toString(10).slice(2, 4))));
    spendTime.innerHTML = hour + " soat " + minute + " daqiqa";
});

samarqand.addEventListener("click", () => {
    map.innerHTML = "Samarqand";
    space.innerHTML = "300km";
    distance = 300;
    time = distance / speed;
    hour = Math.floor(time).toString(10);
    minute = Math.floor(60 / (100 / Number(time.toString(10).slice(2, 4))));
    spendTime.innerHTML = hour + " soat " + minute + " daqiqa";
});

let selectTransport = document.querySelector(".transport");
selectTransport.addEventListener("change", (e) => {
    transport = e.target.value;
    if (transport === "tanlanmagan") {
        speed = 0;
    } else if (transport === "samalyot") {
        speed = 880;
    } else if (transport === "poyezd") {
        speed = 100;
    } else if (transport === "mashina") {
        speed = 80;
    } else if (transport === "velosiped") {
        speed = 25;
    } else if (transport === "piyoda") {
        speed = 4;
    }

    time = distance / speed;
    hour = Math.floor(time).toString(10);
    minute = Math.floor(60 / (100 / Number(time.toString(10).slice(2, 4))));
    spendTime.innerHTML = hour + " soat " + minute + " daqiqa";
});

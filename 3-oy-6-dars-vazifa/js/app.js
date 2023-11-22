// 1 - TOPSHIRIQ

let fName = prompt("Ismingizni kiriting: ");
fName = fName.toUpperCase();
let birthYear = prompt("Tug'ilgan yilingizni kiriting (1998, 2005): ");
let birthMonth = prompt("Tug'ilgan oyingizni sonda kiriting (3, 12, 8): ");
let birthDay = prompt("Tug'ilgan kuningizni kiriting (5, 17, 25): ");

birthYear = Number(birthYear);
birthMonth = Number(birthMonth);
birthDay = Number(birthDay);

let now = Date.now();
let birth = new Date(birthYear, birthMonth - 1, birthDay).getTime();
let forHour = new Date();

const livedYear = parseInt((now - birth) / 1000 / 60 / 60 / 24 / 365.25);
const livedMonth =
    parseInt(((now - birth) / 1000 / 60 / 60 / 24 / 365.25) * 12) -
    livedYear * 12;
const livedDay = parseInt(
    parseInt((now - birth) / 1000 / 60 / 60 / 24) -
        (livedYear * 365.25 + livedMonth * (365.25 / 12))
);
const livedHour = forHour.getHours();

console.log(
    "Hurmatli " +
        fName +
        ", siz " +
        livedYear +
        " yil, " +
        livedMonth +
        " oy, " +
        livedDay +
        " kun, " +
        livedHour +
        " soatni yashab bo'ldingiz"
);
console.log("Tezroq harakatingizni ko'ring, umringiz o'tib ketyabdi 😉");

// 2 - TOPSHIRIQ
console.log("Mashinalarim: ");
let cars = ["Nexia", "Malibu", "Hammer", "Lambargini", "Bugatti"];
console.log(cars);

console.log("Bitta yangi mashina oldim (oxiriga bitta element qo'shildi): ");
let addCar = prompt("Mashina nomini yozing: ");
cars.push(addCar);
console.log(cars);

console.log(
    "Eng birinchi eski mashinani sotdim (eng birinchi element olib tashlandi): "
);
console.log(cars.slice(1));

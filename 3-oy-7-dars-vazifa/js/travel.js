let ticket = 350;
let livingWeek = 500;
let picnic = 300;

let dollar = +prompt("Dollar kurisni kiriting: ");
let evro = +prompt("Evro kursini kiriting: ");

let travelExpens = (ticket + livingWeek) * dollar + picnic * evro;

let eshmatMoney = +prompt("Eshmatjon qancha puling bor?");

if (eshmatMoney > travelExpens) {
    console.log("Maroqli sayohat tilaymiz!");
} else if (eshmatMoney < travelExpens) {
    console.log("Harajatlarga pulingiz yetmaydi!");
} else {
    console.log("To'g'ri summa kiriting");
}

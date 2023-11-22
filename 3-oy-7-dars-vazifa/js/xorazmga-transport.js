let toXorazm = 1100;
let walking = 2;
let bicycle = 20;
let car = 70;
let train = 150;
let airplane = 880;

let transport = prompt(
    "Xorazmga qaysi transportda borasiz? Tanlang va yozing: Samalyot, Poyezd, Mashina, Velosiped, Piyoda"
);
transport = transport.toUpperCase();

if (transport === "SAMALYOT") {
    console.log(
        "Samalyotda taxminan " +
            Math.round(toXorazm / airplane) +
            " soatda yetib borasiz"
    );
} else if (transport === "POYEZD") {
    console.log(
        "Poyezdda taxminan " +
            Math.round(toXorazm / train) +
            " soatda yetib borasiz"
    );
} else if (transport === "MASHINA") {
    console.log(
        "Mashinada taxminan " +
            Math.round(toXorazm / car) +
            " soatda yetib borasiz"
    );
} else if (transport === "VELOSIPED") {
    console.log(
        "Velosipedda taxminan " +
            Math.round(toXorazm / bicycle / 24) +
            " kunda yetib borasiz"
    );
} else if (transport === "PIYODA") {
    console.log(
        "Piyoda taxminan " +
            Math.round(toXorazm / walking / 24) +
            " kunda yetib borasiz"
    );
} else {
    console.log("Nimada borishingizni hato kiritdingiz");
}

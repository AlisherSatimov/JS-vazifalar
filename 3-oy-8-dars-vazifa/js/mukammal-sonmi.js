let son = parseInt(prompt("Son kiriting:"));
let bYigindisi = 1;

if (son <= 1) {
    console.log("Oddiy son");
} else {
    for (let i = 2; i < son; i++) {
        if (son % i === 0) {
            bYigindisi = bYigindisi + i;
        }
    }

    if (son === bYigindisi) {
        console.log("Mukammal son");
    } else {
        console.log("Oddiy son");
    }
}

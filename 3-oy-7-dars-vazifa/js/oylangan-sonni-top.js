let randomNumber = Math.floor(Math.random() * 10) + 1;

// console.log(randomNumber);

let number = +prompt(
    "Men 1 dan 10 gacha bitta son o'yladim? Qaysi sonni o'ylaganimni toping: "
);

if (number === randomNumber) {
    console.log(
        "Tabriklayman, men o'ylagan son haqiqatdan ham " + randomNumber + " edi"
    );
} else {
    console.log("Afsuski topolmadingiz. Qaytadan urinib ko'ring!");
}

let ball = document.querySelector(".ball");
let magicAnswers = document.querySelector(".magicAnswers");
let answers = [
    "Bu aniq",
    "Shubhasiz, shunday",
    "Shubhasiz",
    "Ha, albatta",
    "Siz bunga ishonishingiz mumkin",
    "Ko'rib turganindek, ha",
    "Katta ehtimol bilan",
    "Yaxshi eshitilyabdi",
    "Ha",
    "Belgilar HA ga ishora qiladi",
    "Javob noaniq, qayta urinib ko'ring",
    "Keyinroq so'rang",
    "Endi aytmagan ma'qul",
    "Hozir bashorat qilib bo'lmaydi",
    "Fikrni bir joyga jamlang va yana so'rang",
    "Unga ishonmang",
    "Mening javobim yo'q",
    "Mening manbalarim yo'q deyishadi",
    "Unchalik yaxshi ko'rinmayabdi",
    "Juda shubhali",
];

ball.addEventListener("click", function () {
    let randomAnswers = Math.floor(Math.random() * (answers.length + 1));
    magicAnswers.innerHTML = answers[randomAnswers];
});

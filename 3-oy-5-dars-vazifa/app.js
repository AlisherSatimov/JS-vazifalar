let age = prompt("Yoshingizni kiriting: ");
let ageFeature = prompt(
    "Kattaroq yosh kiriting, shu yoshga kirish uchun necha yil kerakligini aytaman: "
);

currentYear = 2023;
age = Number(age);
ageFeature = Number(ageFeature);
birthYear = currentYear - age;

console.log("Siz " + birthYear + "-yilda tug'ilgansiz");
console.log("3 yildan keyin " + (age + 3) + " yoshga kirasiz");
console.log(
    ageFeature +
        " yoshga kirishingiz uchun yana " +
        (ageFeature - age) +
        " yil kerak bo'ladi"
);

let number = prompt("Son kiriting:");

number = parseInt(number);

let sum;
do {
    sum = 0;
    while (number > 0) {
        sum = sum + (number % 10);
        number = Math.floor(number / 10);
    }
    number = sum;
} while (sum >= 10);

console.log("Raqamlar yig'indisi: " + sum);

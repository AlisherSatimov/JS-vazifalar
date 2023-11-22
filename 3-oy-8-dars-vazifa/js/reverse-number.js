let number = prompt("son kiriting:") + "";
let reverseNumber = "";

for (let i = number.length - 1; i >= 0; i--) {
    reverseNumber = reverseNumber + number[i];
}

console.log(reverseNumber);

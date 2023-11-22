let str = prompt("matn kiriting:") + "";
let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
}

if (reverseStr === str) {
    console.log(str + " = " + reverseStr + " ikkalasi teng");
} else {
    console.log(str + " - " + reverseStr + " ga teng emas");
}

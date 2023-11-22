let startNum = +prompt("Birinchi sonni kriting: ");
let endNum = +prompt("Oxirgi sonni kiriting: ");

if (startNum < endNum) {
    for (startNum; startNum <= endNum; startNum++) {
        if (startNum % 2 === 0) {
            console.log(startNum + " juft son");
        } else {
            console.log(startNum + " toq son");
        }
    }
} else {
    console.log("Boshlang'ich son Oxirgi sondan kichik bo'lishi shart");
}

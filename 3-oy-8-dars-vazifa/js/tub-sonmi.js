let son = parseInt(prompt("Son kiriting:"));

if (son <= 1) {
    console.log("Tub ham Murakkab ham emas");
} else if (son === 2) {
    console.log("Tub son");
} else {
    let tubmi = true;

    for (let i = 2; i < son; i++) {
        if (son % i === 0) {
            tubmi = false;
            break;
        }
    }

    if (tubmi) {
        console.log("Tub Son");
    } else {
        console.log("Murakkab son");
    }
}

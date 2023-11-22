let randomNumber = Math.floor(Math.random() * 100000000);

// Convert to Hex
const hex = randomNumber.toString(16).padEnd(6, "0");

console.log("Random Hex-Decimal Color: ");
console.log("#" + hex.slice(0, 6));

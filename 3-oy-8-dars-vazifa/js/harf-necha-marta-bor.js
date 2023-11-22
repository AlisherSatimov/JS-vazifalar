let gap = prompt("So'zlarni kiriting: ");
let harf = prompt("Harf kiriting");
let soni = 0;

for (let i = 0; i < gap.length; i++) {
    if (gap[i] === harf) {
        soni = soni + 1;
    }
}
console.log(gap);
console.log(harf);
console.log(soni + " marta ishlatilgan");

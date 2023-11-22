let chanse = 5;
let randomNumber = Math.floor(Math.random() * 10 + 1);

while (chanse > 0) {
    let son = +prompt("Men o'ylagan sonni toping ");

    if (randomNumber === son) {
        let usedChanses = 6 - chanse;
        console.log(
            "Tabriklaymiz, siz " +
                usedChanses +
                " marta urinish orqali men o'ylagan raqamni topdingiz"
        );
        break;
    } else {
        chanse = chanse - 1;
        if (chanse > 0) {
            console.log(
                "Topolmadingiz, yana " +
                    chanse +
                    " urinishingiz qoldi. Bo'sh kelmang"
            );
        } else {
            console.log("Urinishlar soni tugadi, uzur");
        }
        continue;
    }
}
if (chanse === 0) {
    console.log("Afsus topolmadingiz");
}

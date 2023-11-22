let cars = ["MALIBU", "HAMMER", "LAMBARGINI", "BUGATTI", "TAYOTA"];

let addCar = prompt("Mashina sotib olamiz, Nomini kiriting: ");
addCar = addCar.toUpperCase();

if (cars.includes(addCar)) {
    console.log(
        "Bu mashina sizda mavjud. Boshqa mashina sotib oling. Hozirda mavjud mashinalaringi: "
    );
    console.log(cars);
} else {
    console.log(
        "Tabriklayman, yana bitta yangi mashina sotib oldingiz. Hozirda sizda quydagi mashinalar mavjud"
    );
    cars.push(addCar);
    console.log(cars);
}

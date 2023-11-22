let featureTime = prompt(
    "Qaysi vaqtgacha taymer ishlashi kerak? Kiriting masalan: 'KUN , YIL SOAT:MIN:SEK' - ya'ni => 'Jan 4 , 2024 15:37:25'"
);
let CDD = new Date(featureTime).getTime();

let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = CDD - now;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "Hato vaqt";
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countDown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

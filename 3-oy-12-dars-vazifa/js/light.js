let images = [
    "/12-dars vazifa/images/light/light-off.jpg",
    "/12-dars vazifa/images/light/light-on.jpg",
];

let i = 0;

let imageElem = document.querySelector(".image");
let lightBtn = document.querySelector(".light-turn");

imageElem.setAttribute("src", images[0]);

lightBtn.addEventListener("click", () => {
    if (++i === images.length) {
        i = 0;
    }

    let img = new Image();
    img.onload = function () {
        imageElem.setAttribute("src", images[i]);
    };
    img.onerror = function () {
        if (i === 0) {
            images[0] = "/images/light/light-off.jpg";
        } else {
            images[1] = "/images/light/light-on.jpg";
        }
        imageElem.setAttribute("src", images[i]);
    };
    img.src = images[i];
});

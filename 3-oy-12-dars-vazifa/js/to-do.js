let form = document.querySelector("form");
let ol = document.querySelector("ol");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = e.target[0];
    let text = input.value;
    if (!text) {
        alert("Bo'sh maydonni to'ldirish shart");
        return;
    }
    ol.innerHTML += "<li>" + text + "</li>";
    e.target.reset();
});

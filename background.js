var cssproperty = document.querySelector("#cssdisplay");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementsByTagName("body")[0];

function setColor() {
    body.style.background = "linear-gradient(to right, " +
        color1.value + ", " + color2.value + ")";

    cssproperty.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);
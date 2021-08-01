const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
document.body.style.transition = "all 1s";
btn.addEventListener("click", function () {

    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandom()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    document.body.color.style.transi
})

function getRandom(){
    return Math.floor(Math.random() * hex.length);
}




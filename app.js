const colors = ["green", "red", "rgba(133,122,266)", "#f15025"];

const color = document.getElementById('Color');

function ChangeColor() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
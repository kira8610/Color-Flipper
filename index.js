const colors = ["red", "blue", "yellow", "green"];
const background = document.getElementById("background");

function changeColor(){
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
}



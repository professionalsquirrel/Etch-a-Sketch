//Generate 16x16 grid upon loading page
const container = document.querySelector(".container");

//Function that builds a grid
function buildGrid(number){
        for (i=1; i<=number*number; i++){
        const square = document.createElement("div");
        const size = 560/number;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid darkmagenta";
        square.style.backgroundColor = "pink";
        square.style.width = size;
        square.style.height = size;
        square.addEventListener("mouseenter", 
        e => square.style.backgroundColor = "lightblue");
        container.appendChild(square);
}
}

buildGrid(16);

//Generate new grid based on user input
const nBoxes = document.querySelector("label");
nBoxes.addEventListener("oninput",
 e => buildGrid(nBoxes.value));
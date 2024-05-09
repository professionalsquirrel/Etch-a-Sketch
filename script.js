//Generate 16x16 grid upon loading page
const container = document.querySelector(".container");

function generateGrid(numberPerSide){
        removeSquares();
        addSquares(numberPerSide);
}

//Generate new grid based on user input
const input = document.querySelector("input");
input.addEventListener("input", () => generateGrid(input.valueAsNumber));

function addSquares(numberPerSide){
        for (i=1; i<=numberPerSide*numberPerSide; i++){
                let square = document.createElement("div");
                let size = 660/numberPerSide;
                let borderThickness = 0.05;
                if (numberPerSide>50) { borderThickness = 0.01};
                square.style.cssText = 
`box-sizing: border-box; width: ${size}px; height: ${size}px; background-color: pink; border: ${borderThickness}em solid darkmagenta; flex: auto;`;
                square.addEventListener("mouseenter", 
                e => square.style.backgroundColor = "lightblue")
                square.classList.add("square");
                container.appendChild(square);
        }
}

function removeSquares(){
        const children = container.getElementsByTagName("div");
        while (children.length){
                children[0].remove();
        }
}

//Generates an initial 16x16 grid
generateGrid(16);

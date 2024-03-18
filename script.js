const container = document.querySelector("div");
container.classList.add("container");
container.style.cssText = "border: 2px solid black; width: 480px; height: 480px"
for (let i = 1; i <= 16; i++) {
    const cont = document.createElement("div");
    container.appendChild(cont);
    cont.classList.add("cont");
    cont.style.cssText = "display: flex; height: 30px; width: 480px;"
    for (let j = 1; j <= 16; j++) {
        const child = document.createElement("div");
        cont.appendChild(child);
        child.classList.add("child");
        child.style.cssText = "width: 30px; height: 30px;";
        child.addEventListener("mouseenter", () => {
            child.style.backgroundColor = "black";
        });
    }
}

const button = document.querySelectorAll("button");
const newGridButton = button[0];
const clearGridButton = button[1];
const eraseGridButton = button[2];
const blackColorButton = button[3];
const randomColorButton = button[4];
const rgbButton = button[5];

newGridButton.addEventListener("click", () => {
    clearGrid();
    createNewGrid();
});

clearGridButton.addEventListener("click", () => {
    clearGrid();
})

eraseGridButton.addEventListener("click", () => {
    eraseGrid();
})

blackColorButton.addEventListener("click", () => {
    blackColor();
});

randomColorButton.addEventListener("click", () => {
    randomColor();
});

rgbButton.addEventListener("click", () => {
    rgb();
});

let createNewGrid = function() {
    clearGrid();
    removeGrid();
    const num = +prompt("Please enter a number :");
    const size = 480/ num;
    for (let i = 1; i <= num; i++) {
        const cont = document.createElement("div");
        container.appendChild(cont);
        cont.classList.add("cont");
        cont.style.cssText = `display: flex; height: ${size}px; width: 480px;`;
        for (let j = 1; j <= num; j++) {
            const child = document.createElement("div");
            cont.appendChild(child);
            child.classList.add("child");
            child.style.cssText = `width: ${size}px; height: ${size}px;`;
            child.addEventListener("mouseenter", () => {
                child.style.backgroundColor = "black";
            });
        }
    }
}

let clearGrid = function() {
    const square = document.querySelectorAll(".child");
    square.forEach(square => {
        square.style.backgroundColor = "white";
    });
}

let eraseGrid = function() {
    const square = document.querySelectorAll(".child");
    square.forEach(square => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "white";
        });
    })
}

let removeGrid = function() {
    const container = document.querySelectorAll(".container");
    container.forEach(container => {
        const square = container.querySelectorAll(".child");
        square.forEach(square => {
            square.parentNode.removeChild(square);
        });
        const conts = container.querySelectorAll(".cont");
        conts.forEach(cont => {
            container.removeChild(cont);
        });
    });
}

let blackColor = function() {
    const child = document.querySelectorAll(".child");
    child.forEach(child => {
        child.addEventListener("mouseenter", () => {
            child.style.backgroundColor = "black";
        })
    })
}

let randomColor = function() {
    const color = getColor();
    const child = document.querySelectorAll(".child")
    child.forEach(child => {
        child.addEventListener("mouseenter",() => {
            child.style.backgroundColor = `${color}`;
        })
    })
}

let getColor = function() {
    const red = +Math.floor((Math.random()*255)+1);
    const blue = +Math.floor((Math.random()*255)+1);
    const green = +Math.floor((Math.random()*255)+1);
    const randomColor = `rgb(${red}, ${blue}, ${green})`;
    return `${randomColor}`
}

let rgb = function() {
    const child = document.querySelectorAll(".child");
    child.forEach(child => {
        child.addEventListener("mouseenter", () => {
            child.style.backgroundColor = getColor();
        });
    });
}
function createGrid(num) {
    const container = document.querySelector("div");

    for (let i=0; i<num; i++) {
        for (let j=0; j<num; j++) {
            const child = document.createElement("div");
            container.appendChild(child);
            child.classList.add("child");
            child.style = `flex: 0 0 calc(100% / ${num}); height: calc(100% / ${num}); width: calc(100% / ${num}); border: 1px solid black;`;
        }
    }

    const child = document.querySelectorAll(".child");
    child.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = "black";
        });
    });
}

createGrid(10);

function newGrid() {
    const container = document.querySelector("div");
    removeGrid();
    const num = +prompt("Enter the size of the grid : ");

    for (let i=0; i<num; i++) {
        for (let j=0; j<num; j++) {
            const child = document.createElement("div");
            container.appendChild(child);
            child.classList.add("child");
            child.style = `flex: 0 0 calc(100% / ${num}); height: calc(100% / ${num}); width: calc(100% / ${num}); border: 1px solid black;`;
        }
    }

    const child2 = document.querySelectorAll(".child");
    child2.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = "black";
        });
    });
}

function removeGrid() {
    const container = document.querySelector("div");
    const child1 = document.querySelectorAll(".child");
    child1.forEach((child) => {
        container.removeChild(child);
    });
}

function clearGrid() {
    const container = document.querySelector("div");
    const child = document.querySelectorAll(".child");
    child.forEach((child) => {
        child.style.backgroundColor = "white";
    });
}

function randomColor() {
    clearGrid();
    let color = chooseColor();

    const child2 = document.querySelectorAll(".child");
    child2.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = `${color}`;
        });
    });
}

function chooseColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function rgb() {
    clearGrid();

    const child2 = document.querySelectorAll(".child");
    child2.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = chooseColor();
        });
    });
}

function eraseGrid() {
    const child2 = document.querySelectorAll(".child");
    child2.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = "white";
        });
    });
}

function increasingOpacity() {
    clearGrid();
    const child = document.querySelectorAll(".child");
    child.forEach((child) => {
        let op = 0.1;
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = "black";
            child.style.opacity = op;
            op += 0.1;
        });
    });
}
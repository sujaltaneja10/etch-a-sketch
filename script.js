const container = document.querySelector("div");
container.style.cssText = "border: 2px solid black; width: 480px; height: 480px"
for (let i = 1; i <= 16; i++) {
    const cont = document.createElement("div");
    container.appendChild(cont);
    cont.style.cssText = "display: flex; height: 30px; width: 480px;"
    for (let j = 1; j <= 16; j++) {
        const child = document.createElement("div");
        cont.appendChild(child);
        child.style.cssText = "width: 30px; height: 30px";
        child.addEventListener("mouseenter", () => {
            child.style.backgroundColor = "black";
        });

    }
}

let gridContainer = document.querySelector("#grid-container")
let setGridButton = document.querySelector("#change-grid")

let gridSize = 4;

for (let i = 1; i < gridSize * gridSize + 1; i++) {
    gridContainer.appendChild(createGrid(i))
}

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
        if (window.getComputedStyle(e.target).backgroundColor === "rgba(0, 0, 0, 0)") {
            e.target.style.backgroundColor = getRandomRGBColor()
        } else {
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1
        }
    }
})

function createGrid(i) {
    let grid = document.createElement("div")
    grid.classList.add("grid")
    grid.id = '' + i
    grid.style.flexBasis = `calc(100%/${gridSize})`
    grid.style.maxHeight = `calc(100%/${gridSize})`
    grid.style.opacity = 0.3
    return grid
}

function getRandomRGBColor() {
    let getRandomNum = () => Math.floor(Math.random() * 256)
    return `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`
}


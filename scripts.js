let gridContainer = document.querySelector("#grid-container")
let setGridButton = document.querySelector("#change-grid")

let gridSize = 100;

for (let i = 1; i < gridSize * gridSize + 1; i++) {
    gridContainer.appendChild(createGrid(i))
}

function createGrid(i) {
    let grid = document.createElement("div")
    grid.classList.add("grid")
    grid.id = '' + i
    grid.style.flexBasis = `calc(100%/${gridSize})`
    grid.style.maxHeight = `calc(100%/${gridSize})`
    return grid
}


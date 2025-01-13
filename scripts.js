let gridContainer = document.querySelector("#grid-container")
let setGridButton = document.querySelector("#change-grid")

setGridButton.addEventListener("click", (e) => {
    let gridSize = prompt("Change squares per side (limit 100)")
    if (gridSize === "") {
        alert("Size cannot be empty!")
        gridSize = prompt("Change squares per side (limit 100)")
    } else if (isNaN(parseInt(gridSize))) {
        alert("Size must be digit!")
        gridSize = prompt("Change squares per side (limit 100)")
    } else if (gridSize > 100) {
        alert("Size cannot be more than 100!")
        gridSize = prompt("Change squares per side (limit 100)")
    } else if (gridSize == 0) {
        alert("Size cannot be zero!")
        gridSize = prompt("Change squares per side (limit 100)")
    }
    gridContainer.replaceChildren()
    createGrids(gridSize)
})



document.addEventListener("DOMContentLoaded", (e) => {
    createGrids(16)
})

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid")) {
        if (window.getComputedStyle(e.target).backgroundColor === "rgba(0, 0, 0, 0)") {
            e.target.style.backgroundColor = getRandomRGBColor()
        } else {
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1
        }
    }
})

function createGrids(size) {
    for (let i = 1; i < size * size + 1; i++) {
        gridContainer.appendChild(createGrid(i, size))
    }
}

function createGrid(i, size) {
    let grid = document.createElement("div")
    grid.classList.add("grid")
    grid.id = '' + i
    grid.style.flexBasis = `calc(100%/${size})`
    grid.style.maxHeight = `calc(100%/${size})`
    grid.style.opacity = 0.3
    return grid
}

function getRandomRGBColor() {
    let getRandomNum = () => Math.floor(Math.random() * 256)
    return `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`
}


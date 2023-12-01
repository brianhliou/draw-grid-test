function createGrid(size) {
    const container = document.getElementById('gridContainer');
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
}

function setupColorPicker() {
    const colorPicker = document.getElementById('colorPicker');
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = colorPicker.value;
        });
    });
}

function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'transparent'; // or any default color
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createGrid(10); // for a 10x10 grid
    setupColorPicker();

    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearGrid);
});
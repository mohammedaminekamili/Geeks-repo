const canvas = document.getElementById('canvas');
const clearBtn = document.getElementById('clear');
const colors = document.querySelectorAll('.color');

let selectedColor = 'black';
let isMouseDown = false;

// 1. Generate the grid squares
// 60 columns * 40 rows = 2400 squares
for (let i = 0; i < 2400; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Start painting on click
    square.addEventListener('mousedown', () => {
        isMouseDown = true;
        square.style.backgroundColor = selectedColor;
    });

    // Paint while dragging
    square.addEventListener('mouseover', () => {
        if (isMouseDown) {
            square.style.backgroundColor = selectedColor;
        }
    });

    canvas.appendChild(square);
}

// 2. Global mouse release (stops painting even if mouse leaves the grid)
window.addEventListener('mouseup', () => {
    isMouseDown = false;
});

// 3. Pick a color from the sidebar
colors.forEach(colorDiv => {
    colorDiv.addEventListener('click', () => {
        selectedColor = colorDiv.style.backgroundColor;
    });
});

// 4. Clear the board
clearBtn.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(sq => sq.style.backgroundColor = 'transparent');
});

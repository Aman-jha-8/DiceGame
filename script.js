const para = document.createElement("p");

document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div")
    container.id = "board"
    document.body.appendChild(container)
    initializeBoard();
    createButtons();
    addStyles();
});

let currentPosition = 1;

function createButtons() {
    const diceBtn = document.createElement("button");
    diceBtn.id = "diceBtn";
    diceBtn.textContent = "Roll Dice";
    diceBtn.addEventListener("click", rollDice);
    document.body.appendChild(diceBtn);

    const resetBtn = document.createElement("button");
    resetBtn.id = "resetBtn";
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", resetGame);
    document.body.appendChild(resetBtn);
}

function initializeBoard() {
    const board = document.getElementById("board");

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const square = document.createElement("div");
            square.className = `square ${row % 2 === 0 ? (col % 2 === 0 ? 'black' : 'white') : (col % 2 === 0 ? 'white' : 'black')}`;
            square.innerText = row * 10 + col + 1;
            board.appendChild(square);
        }
    }
    createRedSquare()
    // board.appendChild(createRedSquare());
}

function createRedSquare() {
    const redSquare = document.createElement("div");
    redSquare.id = "redSquare";
    redSquare.textContent = "1";
    document.getElementById("board").appendChild(redSquare);
}

function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    moveRedSquare(diceValue);
}

function moveRedSquare(steps) {
    if (currentPosition + steps <= 100) {
        currentPosition += steps;
        const redSquare = document.getElementById("redSquare");
        redSquare.textContent = currentPosition;
        redSquare.style.transform = `translate(${(currentPosition - 1) % 10 * 52}px, ${(Math.floor((currentPosition - 1) / 10)) * 52}px)`;
    }
    para.innerHTML=`<p>dice rolled to ${steps}</p>`
    if (currentPosition === 100) {
        para.innerHTML=`<div>dice rolled to ${steps} <br> <h3> YOU WON </h3></div>`
        alert("You won!");
    }
    document.getElementById("resetBtn").insertAdjacentElement("afterend",para)
}

function resetGame() {
    currentPosition = 1;
    const redSquare = document.getElementById("redSquare");
    redSquare.textContent = "1";
    redSquare.style.transform = "translate(0, 0)";
}


//  ---------------STYLES------BY-----JAVA-SCRIPT---------------

function addStyles() {
    // Select elements using querySelector
    const board = document.querySelector('#board');
    const redSquare = document.querySelector('#redSquare');
    const diceBtn = document.querySelector('#diceBtn');
    const resetBtn = document.querySelector('#resetBtn');

    // Apply styles to the selected elements
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(10, 50px)';
    board.style.gridTemplateRows = 'repeat(10, 50px)';
    board.style.gap = '2px';

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.display = 'flex';
        square.style.alignItems = 'center';
        square.style.justifyContent = 'center';
    });

    const whiteSquares = document.querySelectorAll('.square.white');
    whiteSquares.forEach(whiteSquare => {
        whiteSquare.style.backgroundColor = 'white';
    });

    const blackSquares = document.querySelectorAll('.square.black');
    blackSquares.forEach(blackSquare => {
        blackSquare.style.backgroundColor = 'black';
        blackSquare.style.color = 'white';
    });

    redSquare.style.width = '50px';
    redSquare.style.height = '50px';
    redSquare.style.backgroundColor = 'red';
    redSquare.style.color = 'white';
    redSquare.style.display = 'flex';
    redSquare.style.alignItems = 'center';
    redSquare.style.justifyContent = 'center';
    redSquare.style.position = 'absolute';
    redSquare.style.transition = 'transform 0.386s ease-in-out';

    diceBtn.style.padding = '0.59rem';
    diceBtn.style.marginBlock = '0.938rem';
    diceBtn.style.marginInlineEnd = '0.93rem';
    diceBtn.style.backgroundColor = 'blue';
    diceBtn.style.color = '#fff';
    diceBtn.style.fontWeight = '700';
    diceBtn.style.boxShadow = '3px 3px 6px 4px rgba(25, 63, 42, 0.46)';

    resetBtn.style.padding = '0.59rem';
    resetBtn.style.marginBlock = '0.938rem';
    resetBtn.style.marginInlineEnd = '0.93rem';
    resetBtn.style.backgroundColor = 'red';
    resetBtn.style.color = '#fff';
    resetBtn.style.fontWeight = '700';
    resetBtn.style.boxShadow = '3px 3px 6px 4px rgba(25, 63, 42, 0.46)';
}

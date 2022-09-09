const cross = "X";
const nought = "O";

let playerTurn = cross;
let isFinished = false;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const isWin = (value) => {
    for (let i = 0; i < winConditions.length; i++) {
        const values = winConditions[i].map((cell) => {
            return document.getElementById(`cell-${cell}`).innerText === value;
        });
        if (values.every(value => value === true)) {
            for (let j = 0; j < winConditions[i].length; j++) {
                document.getElementById(`cell-${winConditions[i][j]}`).classList.add("win");
            }
            return true
        };
    }
    return false;
}

const isGridFull = () => {
    for (let i = 0; i < 9; i++) {
        if (document.getElementById(`cell-${i}`).innerText == "") return false;
    }
    return true;
} 

const resetGrid = () => {
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell-${i}`);
        cell.innerText = "";
        cell.classList.remove("win");
    }
    document.getElementById("winnerText").innerText = "";
    isFinished = false;
}

const updateCellValue = (e) => {
    if (!isFinished) {
        if (document.getElementById(`${e.target.id}`).innerText == "") {
            document.getElementById(`${e.target.id}`).innerText = playerTurn;
            playTapSound();
            if (isWin(playerTurn)) {
                document.getElementById("winnerText").innerText = `Player ${playerTurn} has won the game`;
                isFinished = true;
                return;
            } else if (isGridFull()) {
                document.getElementById("winnerText").innerText = `Draw`;
                isFinished = true;
                return;
            }
            playerTurn = playerTurn === cross ? nought : cross;
        }
    }
}

const playTapSound = () => {
    const audio = new Audio('tap.wav');
    audio.play();
}

const initialise = () => {
    const grid = document.getElementById("grid");

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        const cellId = document.createAttribute("id");
        cellId.value = `cell-${i}`;
        cell.setAttributeNode(cellId);
        const cellClass = document.createAttribute("class");
        cellClass.value = "cell";
        cell.setAttributeNode(cellClass);

        const content = document.createTextNode("");
        cell.appendChild(content);
        cell.addEventListener("click", updateCellValue);
        grid.append(cell);
    }
}

document.body.onload = initialise;
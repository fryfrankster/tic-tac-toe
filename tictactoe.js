const grid = [
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["X", "O", "X"],
];

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
        if (values.every(value => value === true)) return true;
    }
    return false;
}

const resetGrid = () => {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell-${i}`).innerText = "";
    }
    document.getElementById("winnerText").innerText = "";
    isFinished = false;
}

const updateCellValue = (e) => {
    if (!isFinished) {
        if (document.getElementById(`${e.target.id}`).innerText == "") {
            document.getElementById(`${e.target.id}`).innerText = playerTurn;
            if (isWin(playerTurn)) {
                document.getElementById("winnerText").innerText = `Player ${playerTurn} has won the game`;
                isFinished = true;
                return;
            }
            playerTurn = playerTurn === cross ? nought : cross;
        }
    }
}

const initialise = () => {
    const grid = document.createElement("div");
    const gridId = document.createAttribute("class");
    gridId.value = "grid";
    grid.setAttributeNode(gridId);
    grid.style.border = "1px solid black";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.gridAutoRows = "minmax(100px, auto)";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        const id = document.createAttribute("id");
        id.value = `cell-${i}`;
        cell.setAttributeNode(id);
        const content = document.createTextNode("");
        cell.appendChild(content);
        cell.style.border = "1px solid black";

        cell.addEventListener("click", updateCellValue);
        grid.appendChild(cell);
    }

    const winnerText = document.createElement("h3");
    const winnerTextId = document.createAttribute("id");
    winnerTextId.value = "winnerText";
    winnerText.setAttributeNode(winnerTextId);
    winnerText.innerText = "";

    const resetButton = document.createElement("button");
    const buttonId = document.createAttribute("id");
    buttonId.value = "grid";
    resetButton.setAttributeNode(buttonId);
    resetButton.innerText = "Reset";
    resetButton.addEventListener("click", resetGrid);

    document.body.appendChild(grid);
    document.body.appendChild(winnerText);
    document.body.appendChild(resetButton);
}

document.body.onload = initialise;
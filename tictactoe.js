const grid = [
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["X", "O", "X"],
];

const cross = "X";
const nought = "O";

let playerTurn = cross;

 /** Command line implementation of functions
  * const winConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],

    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],

    [[0, 0], [1, 1], [2, 2]],
    [[2, 0], [1, 1], [0, 2]]
];

const isWin = (value) => {
    for (let condition = 0; condition < winConditions.length; condition++) {
        const values = winConditions[condition].map((cell) => {
            return grid[cell[0]][cell[1]] === value;
        });
        if (values.every(value => value === true)) return true;
    }
    return false;
}

const addToGrid = (value, xpos, ypos) => {
    if ((xpos >= 0 && xpos <= 2) && (ypos >= 0 && ypos <= 2)) {
        grid[xpos][ypos] = value;
        if (isWin(playerTurn)) {
            console.log(`Player ${player} has one the game`);
            return;
        }
        playerTurn = cross ? nought : cross;
    }
};

const logGameStatus = () => {
    console.log(`
    ${grid[0][0]} ${grid[0][1]} ${grid[0][2]}\n
    ${grid[1][0]} ${grid[1][1]} ${grid[1][2]}\n
    ${grid[2][0]} ${grid[2][1]} ${grid[2][2]}
    `);
    console.log(playerTurn);
}
  */

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
}

const updateCellValue = (e) => {
    if (document.getElementById(`${e.target.id}`).innerText == "") {
        document.getElementById(`${e.target.id}`).innerText = playerTurn;
        if (isWin(playerTurn)) {
            console.log(`Player ${playerTurn} has one the game`);
            return;
        }
        playerTurn = playerTurn === cross ? nought : cross;
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

    const resetButton = document.createElement("button");
    const buttonId = document.createAttribute("id");
    buttonId.value = "grid";
    resetButton.setAttributeNode(buttonId);
    resetButton.innerText = "Reset";
    resetButton.addEventListener("click", resetGrid);

    document.body.appendChild(grid);
    document.body.appendChild(resetButton);
}

document.body.onload = initialise;
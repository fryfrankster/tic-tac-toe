const grid = [
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["X", "O", "X"],
];

const cross = "X";
const nought = "O";

let playerTurn = cross;

const winConditions = [
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

const updateCellValue = (e) => {
    document.getElementById(`${e.target.id}`).innerText = playerTurn;
    playerTurn = playerTurn === cross ? nought : cross;
}

/**
 * Apply styles for grid outline
 * Look into mouse-events and event handlers (mouse hovering over divs)
 */

const initialise = () => {
    const grid = document.createElement("div");
    const id = document.createAttribute("class");
    id.value = "grid";
    grid.setAttributeNode(id);
    grid.style.border = "1px solid black";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
    grid.style.gridAutoRows = "minmax(100px, auto)";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        const id = document.createAttribute("id");
        id.value = `cell-${i}`;
        cell.setAttributeNode(id);
        const content = document.createTextNode(`${i}`);
        cell.appendChild(content);
        cell.style.border = "1px solid black";

        cell.addEventListener("click", updateCellValue);
        grid.appendChild(cell);
    }
    document.body.appendChild(grid);

}

document.body.onload = initialise;
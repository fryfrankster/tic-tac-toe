/**
 * Draft implementation
 * 
 * WIN CONDITIONS
 * Win: Three consecutive X or O horizontally, vertically, and diagonally
 * Draw: The conditions above are not met
 * 
 * STRUCTURE
 * Tic Tac Toe is a played with a 3x3 grid. An array data structure would be ideal here (2D array)
 * 
 * PLAYER
 * Turns for each player will alternate
 * 
 * INPUT
 * Await user input via terminal should be implemented after
 */


 const grid = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];

const cross = "X";
const nought = "O";

let playerTurn = cross;

const isWin = (value) => {
    /**
     * IMPLEMENT THIS
     * 
     * Horizontal
     * [[0, 0], [0, 1], [0, 2]]
     * [[1, 0], [1, 1], [1, 2]]
     * [[2, 0], [2, 1], [2, 2]]
     * 
     * Vertical
     * [[0, 0], [1, 0], [2, 0]]
     * [[0, 1], [1, 1], [2, 1]]
     * [[0, 2], [1, 2], [2, 2]]
     * 
     * Diagonal
     * [[0, 0], [1, 1], [2, 2]]
     * [[2, 0], [1, 1], [0, 2]]
     */

    return
}

const addToGrid = (value, xpos, ypos) => {
    if ((xpos >= 0 && xpos <= 2) && (ypos >= 0 && ypos <= 2)) {
        grid[xpos][ypos] = value;
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

const main = () => {
    logGameStatus();
    addToGrid(playerTurn, 2, 2);
    logGameStatus();
}

main();
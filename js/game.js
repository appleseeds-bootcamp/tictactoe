const HEIGHT = 3;
const WIDTH = 3;

class Game {
    constructor() {
        this.board = new Board(HEIGHT, WIDTH);
        this.currentTurnSign = "X";
    }

    setSignOnBoard(x, y) {
        let currentCell = this.board.cells[x][y];

        if (currentCell.sign === undefined) {
            currentCell.sign = this.currentTurnSign;

            this.toggleSign();
        } else {
            console.log("Player clicked on occupied cell");
        }
    }

    toggleSign() {
        if (this.currentTurnSign === "X") {
            this.currentTurnSign = "O";
        } else {
            this.currentTurnSign = "X";
        }
    }
}


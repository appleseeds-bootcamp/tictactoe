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

            let isWinner = this.checkIfWon(x, y);

            if (isWinner) {
                alert("Win!");
            }

            this.toggleSign();

            return currentCell.sign;
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

    checkIfWon(rowIndex, colIndex) {
        return this.checkIfWonInRow(rowIndex);
        // TODO: Uncomment this when implemented
        // this.checkIfWonInCols();
        // this.checkIfWonInCrosses();
    }

    checkIfWonInRow(rowIndex) {
        let rowArray = this.board.cells[rowIndex];
        let isWinner = rowArray.every(cell => cell.sign === this.currentTurnSign);
        // for (let i = 0; i < rowArray.length; i++) {
        //     if (rowArray[i].sign !== this.currentTurnSign) {
        //         return false;
        //     }
        // }

        return isWinner;
    }

    checkIfWonInCols(colIndex) {
        // TODO: implement check in cols
    }

    checkIfWonInCrosses() {
        // TODO: implement check in rows
    }
}
class Board {
    constructor(height, width) {
        this.cells = this.createBoardCells(height, width);
    }

    createBoardCells(height, width) {
        let cellsArray = [];
        for (let i = 0; i < height; i++) {
            let rowArray = [];
            for (let j = 0; j < width; j++) {
                let cell = new Cell()
                rowArray.push(cell);
            }
            cellsArray.push(rowArray);
        }
        return cellsArray;
    }
}
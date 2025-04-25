export enum TileType {
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
    EXIT,
    STRAIGHT_HORIZONTAL,
    STRAIGHT_VERTICAL,
    TOP_LEFT,
    TOP_RIGHT,
    EMPTY,
    ENTRANCE
}

export enum Direction {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    TOP = "TOP",
    BOTTOM = "BOTTOM"
}

export interface TileDetail {
    src: string;
    exits: Direction[]
}

export const TileDetails: { [k in TileType]: TileDetail } = {
    [TileType.BOTTOM_LEFT]: {
        src: '/assets/images/tasks/1/A/labyrinth/bottom-left.jpg',
        exits: [Direction.BOTTOM, Direction.LEFT]
    },
    [TileType.BOTTOM_RIGHT]: {
        src: '/assets/images/tasks/1/A/labyrinth/bottom-right.jpg',
        exits: [Direction.BOTTOM, Direction.RIGHT]
    },
    [TileType.EXIT]: {
        src: "/assets/images/tasks/1/A/labyrinth/exit.jpg",
        exits: [Direction.LEFT, Direction.BOTTOM]
    },
    [TileType.STRAIGHT_HORIZONTAL]: {
        src: '/assets/images/tasks/1/A/labyrinth/straight-horizontal.jpg',
        exits: [Direction.LEFT, Direction.RIGHT]
    },
    [TileType.STRAIGHT_VERTICAL]: {
        src: '/assets/images/tasks/1/A/labyrinth/straight-vertical.jpg',
        exits: [Direction.TOP, Direction.BOTTOM]
    },
    [TileType.TOP_LEFT]: {
        src: '/assets/images/tasks/1/A/labyrinth/top-left.jpg',
        exits: [Direction.TOP, Direction.LEFT]
    },
    [TileType.TOP_RIGHT]: {
        src: '/assets/images/tasks/1/A/labyrinth/top-right.jpg',
        exits: [Direction.TOP, Direction.RIGHT]
    },
    [TileType.EMPTY]: {
        src: '/assets/images/tasks/1/A/labyrinth/empty_tile.png',
        exits: []
    },
    [TileType.ENTRANCE]: {
        src: '/assets/images/tasks/1/A/labyrinth/entrance.jpg',
        exits: [Direction.TOP, Direction.RIGHT]
    },
}

export class Labyrinth {
    matrix: TileType[][];
  
    constructor(rowNumber: number, columnNumber: number) {
      this.matrix = this.initMatrix(rowNumber, columnNumber);
    }

    initMatrix(rowNumber: number, columnNumber: number) : TileType[][] {
        let matrix: TileType[][] = [];
        for(let i=0; i<rowNumber; i++){
            const row: TileType[] = [];
            for(let j=0; j<columnNumber; j++){
                row.push(TileType.EMPTY);
            }
            matrix.push(row);
        }
        matrix[0][columnNumber-1] = TileType.EXIT;
        matrix[rowNumber-1][0] = TileType.ENTRANCE;
        return matrix;
    }

    changeTile(rowIndex: number, columnIndex: number){
        let tile = this.matrix[rowIndex][columnIndex];
        tile++;
        tile = tile % 9;
        this.matrix[rowIndex][columnIndex] = tile;
        if (tile == TileType.ENTRANCE || tile == TileType.EXIT){
            this.changeTile(rowIndex, columnIndex);
        }
    }

    checkWin(){
        return this.checkPath(this.matrix.length-1, 0, Direction.BOTTOM);
    }

    checkPath(starterRowIdx: number, startedColIdx: number, entranceDir: Direction): boolean{
        if(starterRowIdx < 0 || starterRowIdx >= this.matrix.length || startedColIdx < 0 || startedColIdx >= this.matrix[0].length){
            return false;
        }
        if(this.matrix[starterRowIdx][startedColIdx] != TileType.ENTRANCE && !TileDetails[this.matrix[starterRowIdx][startedColIdx]].exits.includes(entranceDir)){
            return false;
        }
        if(this.matrix[starterRowIdx][startedColIdx] == TileType.EXIT){
            return true;
        } else {
            let win = false;
            if(entranceDir != Direction.BOTTOM && TileDetails[this.matrix[starterRowIdx][startedColIdx]].exits.includes(Direction.BOTTOM)){
                win = win || this.checkPath(starterRowIdx+1, startedColIdx, Direction.TOP);
            }
            if(win != true && entranceDir != Direction.TOP && TileDetails[this.matrix[starterRowIdx][startedColIdx]].exits.includes(Direction.TOP)){
                win = win || this.checkPath(starterRowIdx-1, startedColIdx, Direction.BOTTOM);
            }
            if(win != true && entranceDir != Direction.LEFT && TileDetails[this.matrix[starterRowIdx][startedColIdx]].exits.includes(Direction.LEFT)){
                win = win || this.checkPath(starterRowIdx, startedColIdx-1, Direction.RIGHT);
            }
            if(win != true && entranceDir != Direction.RIGHT && TileDetails[this.matrix[starterRowIdx][startedColIdx]].exits.includes(Direction.RIGHT)){
                win = win || this.checkPath(starterRowIdx, startedColIdx+1, Direction.LEFT);
            }
            return win;
        }
    }
}
  
import { Matrix } from 'src/app/shared/matrix';

export class Board {
    private userAWins: number;
    private userBWins: number;
    constructor(private matrix: Matrix) {}

    setSserAWins(number: number) {
        this.userAWins = number;
    }

    setSserBWins(number: number) {
        this.userBWins = number;
    }
}

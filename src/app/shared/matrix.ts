export class Matrix {
    private matrix: string[][] = [3][3];
    constructor() {}

    getMatrix() {
        return this.matrix();
    }

    setMetrix(matrix: [3][]) {
        this.matrix = matrix;
    }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Box } from 'src/app/shared/box';
import { User } from 'src/app/shared/user';

export class DataService {

  matrix: Box[][];
  matrixChanged = new Subject<Box[][]>();
  constructor() {
    this.initGame();
  }

  initGame() {
    this.matrix = [];
    for (let i = 0; i < 3; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < 3; j++) {
            this.matrix[i][j] = new Box('Epmty', i, j);
        }
    }
    this.matrixChanged.next(this.matrix.slice());
  }

  getMatrix() {
    return this.matrix.slice();
  }

  drow(user: User, box: Box) {
    box.sign = user.sign;
    this.matrixChanged.next(this.matrix.slice());
  }

  checkWin() {
    console.log(this.matrix[0][0].sign);
    console.log(this.matrix[0][1].sign);
    console.log(this.matrix[0][2].sign);
    if (this.matrix[0][0].sign === this.matrix[0][1].sign) {
      return true;
    }
    return false;
  }

  disabledAll() {
    // for (let i = 0; i < 3; i++) {
    //   this.matrix[i] = [];
    //   for (let j = 0; j < 3; j++) {
    //       this.matrix[i][j].dirty = true;
    //   }
    // }
    // this.matrixChanged.next(this.matrix.slice());
  }

}

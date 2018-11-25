import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Box } from 'src/app/shared/box';
import { User } from 'src/app/shared/user';
import { Board } from 'src/app/shared/board';

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
            this.matrix[i][j] = new Box('empty');
        }
    }
    this.matrixChanged.next(this.matrix.slice());
  }

  updateScore(user: User) {
    user.score++;
  }

  getMatrix() {
    return this.matrix.slice();
  }

  drow(user: User, box: Box) {
    box.sign = user.sign;
    this.matrixChanged.next(this.matrix.slice());
  }

  
  sequenceDirty(a, b ,c) {
    return this.matrix[a.x][a.y].dirty && this.matrix[b.x][b.y].dirty && this.matrix[c.x][c.y].dirty;
  }
  checkWin() {

    /*
      00 01 02
      10 11 12
      20 21 22
    */
    // ROWS
    if (this.sequenceDirty({x: 0,y: 0}, {x: 0, y: 1} , {x: 0, y: 2}) && 
        this.matrix[0][0].sign === this.matrix[0][1].sign && this.matrix[0][1].sign == this.matrix[0][2].sign) { return true; }

    if (this.sequenceDirty({x: 1,y: 0}, {x: 1, y: 1} , {x: 1, y: 2}) && 
      this.matrix[1][0].sign === this.matrix[1][1].sign && this.matrix[1][1].sign == this.matrix[1][2].sign) { return true; }

    if (this.sequenceDirty({x: 2,y: 0}, {x: 2, y: 1} , {x: 2, y: 2}) &&
      this.matrix[2][0].sign === this.matrix[2][1].sign && this.matrix[2][1].sign == this.matrix[2][2].sign) { return true; }

    if (this.sequenceDirty({x: 0,y: 0}, {x: 1, y: 0} , {x: 2, y: 0}) && 
    this.matrix[0][0].sign === this.matrix[1][0].sign && this.matrix[1][0].sign == this.matrix[2][0].sign) { return true; }

    if (this.sequenceDirty({x: 0, y:1}, {x: 1, y: 1} , {x: 2, y: 1}) && 
      this.matrix[0][1].sign === this.matrix[1][1].sign && this.matrix[1][1].sign == this.matrix[2][1].sign) { return true; }

    if (this.sequenceDirty({x: 0,y: 2}, {x: 1, y: 2} , {x: 2, y: 2}) && 
      this.matrix[0][2].sign === this.matrix[1][2].sign && this.matrix[1][2].sign == this.matrix[2][2].sign) { return true; }

    if (this.sequenceDirty({x: 0,y: 0}, {x: 1, y: 1} , {x: 2, y: 2}) &&
     this.matrix[0][0].sign === this.matrix[1][1].sign && this.matrix[1][1].sign == this.matrix[2][2].sign) { return true; }

    if (this.sequenceDirty({x: 0,y: 2}, {x: 1, y: 1} , {x: 2, y: 0}) && 
      this.matrix[0][2].sign === this.matrix[1][1].sign && this.matrix[1][1].sign == this.matrix[2][0].sign) { return true; }
    return false;
  }

}

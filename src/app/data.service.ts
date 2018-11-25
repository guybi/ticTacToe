import { Matrix } from './shared/matrix';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class DataService {
  matrixChanged = new Subject<Matrix>();
  matrix = new Matrix;
  constructor() { }
}

import { Matrix } from './../shared/matrix';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  matrix: Matrix[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.matrix = this.dataService.matrix;
    this.subscription = this.dataService.matrixChanged
                          .subscribe(
                            (matrix: Matrix) => {
                              this.matrix = matrix;
                            }
                          );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // To prevent memory leacks;
  }
}

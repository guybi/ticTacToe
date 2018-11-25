import { Board } from './../shared/board';
import { Box } from './../shared/box';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  matrix: Box[][];
  private board: Board;
  private userA = new User();
  private userB = new User();
  private activeUser: User;
  private winner = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.matrix = this.dataService.getMatrix();
    this.userA.active = true;
    this.activeUser = this.userA;
    console.log(this.matrix);
    this.subscription = this.dataService.matrixChanged
                          .subscribe(
                            (matrix: Box[][]) => {
                              console.log(this.matrix);
                              this.matrix = matrix;
                            }
                          );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); // To prevent memory leacks;
  }

  onBoxClick(box: Box) {
    console.log(event);
    
    this.dataService.drow(this.activeUser, box);
    if (this.dataService.checkWin()) {
      this.winner = true;
      this.dataService.disabledAll();
      return;
    }
    this.changeActiveUser();
  }

  changeActiveUser() {
    if (this.userA.active) {
      this.userB.active = true;
      this.userA.active = false;
      this.activeUser = this.userB;
    } else if (this.userB.active) {
      this.userB.active = false;
      this.userA.active = true;
      this.activeUser = this.userA;
    } else {
      console.log("error");
    }
  }

  newGame() {
    this.dataService.initGame();
    this.userB.active = false;
    this.userA.active = true;
  }
}

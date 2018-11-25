import { Component, OnInit, OnDestroy } from '@angular/core';
import { Board } from './../shared/board';
import { Box } from './../shared/box';
import { DataService } from './../data.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/user';
import { isDate } from 'util';

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
  private counterTurn = 0;
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
    this.dataService.drow(this.activeUser, box);
    this.counterTurn++;
    let isDuce = false
    if (isDuce =  this.isDuce() || this.dataService.checkWin()) {
      this.endGame(isDuce);
      return;
    }
    this.changeActiveUser();
  }

  endGame(isDuce) {
    if (isDuce) {
       alert("Duce"); 
       this.dataService.updateScore(this.userA);
       this.dataService.updateScore(this.userB);
      } else {
      alert("the winner is : " + this.activeUser.sign);
      this.dataService.updateScore(this.activeUser);
    }
    this.winner = false;
    this.dataService.initGame();
    return;

  }
  isDuce() {
    return this.counterTurn === 9;
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
    this.winner = false;
  }
}

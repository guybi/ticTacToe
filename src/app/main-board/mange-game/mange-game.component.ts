import { User } from 'src/app/shared/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mange-game',
  templateUrl: './mange-game.component.html',
  styleUrls: ['./mange-game.component.css']
})
export class MangeGameComponent implements OnInit {

  @Input() userA: User;
  @Input() userB: User;
  constructor() { }

  ngOnInit() {
  }

}

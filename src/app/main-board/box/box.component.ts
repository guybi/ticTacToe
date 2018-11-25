import { Box } from 'src/app/shared/box';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input() box: Box;
  @Output() selectedBoxEvent = new EventEmitter<Box>();

  constructor() { }

  ngOnInit() {
  }

  onClickBox() {
    this.box.dirty = true;
    this.selectedBoxEvent.emit(this.box);
  }


}

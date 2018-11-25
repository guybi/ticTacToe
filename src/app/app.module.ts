import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './main-board/main-board.component';
import { BoxComponent } from './main-board/box/box.component';
import { MangeGameComponent } from './main-board/mange-game/mange-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    BoxComponent,
    MangeGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

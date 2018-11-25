import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeGameComponent } from './mange-game.component';

describe('MangeGameComponent', () => {
  let component: MangeGameComponent;
  let fixture: ComponentFixture<MangeGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

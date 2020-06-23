import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSegurosComponent } from './card-seguros.component';

describe('CardSegurosComponent', () => {
  let component: CardSegurosComponent;
  let fixture: ComponentFixture<CardSegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

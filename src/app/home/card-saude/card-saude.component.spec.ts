import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaudeComponent } from './card-saude.component';

describe('CardSaudeComponent', () => {
  let component: CardSaudeComponent;
  let fixture: ComponentFixture<CardSaudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSaudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

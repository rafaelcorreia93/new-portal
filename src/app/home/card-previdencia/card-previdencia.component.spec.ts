import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrevidenciaComponent } from './card-previdencia.component';

describe('CardPrevidenciaComponent', () => {
  let component: CardPrevidenciaComponent;
  let fixture: ComponentFixture<CardPrevidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPrevidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrevidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

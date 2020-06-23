import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceShortcutComponent } from './service-shortcut.component';

describe('ServiceShortcutComponent', () => {
  let component: ServiceShortcutComponent;
  let fixture: ComponentFixture<ServiceShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

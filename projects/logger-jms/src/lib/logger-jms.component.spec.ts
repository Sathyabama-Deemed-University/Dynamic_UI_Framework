import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmsLoggerComponent } from './logger-jms.component';

describe('JmsLoggerComponent', () => {
  let component: JmsLoggerComponent;
  let fixture: ComponentFixture<JmsLoggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JmsLoggerComponent]
    });
    fixture = TestBed.createComponent(JmsLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicJMSComponent } from './dynamic-jms.component';

describe('DynamicJMSComponent', () => {
  let component: DynamicJMSComponent;
  let fixture: ComponentFixture<DynamicJMSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicJMSComponent]
    });
    fixture = TestBed.createComponent(DynamicJMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

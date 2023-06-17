import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpJmsComponent } from './pop-up-jms.component';

describe('PopUpJmsComponent', () => {
  let component: PopUpJmsComponent;
  let fixture: ComponentFixture<PopUpJmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpJmsComponent]
    });
    fixture = TestBed.createComponent(PopUpJmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

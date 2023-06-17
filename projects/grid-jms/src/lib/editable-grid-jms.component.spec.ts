import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableGridJmsComponent } from './editable-grid-jms.component';

describe('EditableGridJmsComponent', () => {
  let component: EditableGridJmsComponent;
  let fixture: ComponentFixture<EditableGridJmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditableGridJmsComponent]
    });
    fixture = TestBed.createComponent(EditableGridJmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

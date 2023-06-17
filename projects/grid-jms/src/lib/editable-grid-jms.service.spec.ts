import { TestBed } from '@angular/core/testing';

import { EditableGridJmsService } from './editable-grid-jms.service';

describe('EditableGridJmsService', () => {
  let service: EditableGridJmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditableGridJmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

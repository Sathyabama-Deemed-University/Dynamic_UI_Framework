import { TestBed } from '@angular/core/testing';

import { PopUpJmsService } from './pop-up-jms.service';

describe('PopUpJmsService', () => {
  let service: PopUpJmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopUpJmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

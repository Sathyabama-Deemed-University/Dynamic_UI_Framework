import { TestBed } from '@angular/core/testing';

import { JmsLoggerService } from './logger-jms.service';

describe('JmsLoggerService', () => {
  let service: JmsLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JmsLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

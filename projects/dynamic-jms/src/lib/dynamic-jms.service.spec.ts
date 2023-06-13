import { TestBed } from '@angular/core/testing';

import { DynamicJMSService } from './dynamic-jms.service';

describe('DynamicJMSService', () => {
  let service: DynamicJMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicJMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

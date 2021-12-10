import { TestBed } from '@angular/core/testing';

import { CqrsService } from './cqrs.service';

describe('CqrsService', () => {
  let service: CqrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CqrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

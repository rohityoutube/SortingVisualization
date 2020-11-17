import { TestBed } from '@angular/core/testing';

import { MergesortService } from './mergesort.service';

describe('MergesortService', () => {
  let service: MergesortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergesortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

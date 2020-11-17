import { TestBed } from '@angular/core/testing';

import { SelectionsortService } from './selectionsort.service';

describe('SelectionsortService', () => {
  let service: SelectionsortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectionsortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

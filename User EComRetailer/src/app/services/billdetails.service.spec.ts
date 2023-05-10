import { TestBed } from '@angular/core/testing';

import { BilldetailsService } from './billdetails.service';

describe('BilldetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BilldetailsService = TestBed.get(BilldetailsService);
    expect(service).toBeTruthy();
  });
});

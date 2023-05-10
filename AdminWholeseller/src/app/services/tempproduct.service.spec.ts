import { TestBed, inject } from '@angular/core/testing';

import { TempproductService } from './tempproduct.service';

describe('TempproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempproductService]
    });
  });

  it('should be created', inject([TempproductService], (service: TempproductService) => {
    expect(service).toBeTruthy();
  }));
});

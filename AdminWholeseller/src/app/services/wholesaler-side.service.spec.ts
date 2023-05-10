import { TestBed, inject } from '@angular/core/testing';

import { WholesalerSideService } from './wholesaler-side.service';

describe('WholesalerSideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WholesalerSideService]
    });
  });

  it('should be created', inject([WholesalerSideService], (service: WholesalerSideService) => {
    expect(service).toBeTruthy();
  }));
});

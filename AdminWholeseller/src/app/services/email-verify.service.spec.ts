import { TestBed, inject } from '@angular/core/testing';

import { EmailVerifyService } from './email-verify.service';

describe('EmailVerifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailVerifyService]
    });
  });

  it('should be created', inject([EmailVerifyService], (service: EmailVerifyService) => {
    expect(service).toBeTruthy();
  }));
});

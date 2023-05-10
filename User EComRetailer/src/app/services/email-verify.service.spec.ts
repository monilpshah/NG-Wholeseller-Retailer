import { TestBed } from '@angular/core/testing';

import { EmailVerifyService } from './email-verify.service';

describe('EmailVerifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailVerifyService = TestBed.get(EmailVerifyService);
    expect(service).toBeTruthy();
  });
});

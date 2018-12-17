import { TestBed } from '@angular/core/testing';

import { ClaimHandlerService } from './claim-handler.service';

describe('ClaimHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimHandlerService = TestBed.get(ClaimHandlerService);
    expect(service).toBeTruthy();
  });
});

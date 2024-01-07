import { TestBed } from '@angular/core/testing';

import { DmModeService } from './dm-mode.service';

describe('DmModeService', () => {
  let service: DmModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

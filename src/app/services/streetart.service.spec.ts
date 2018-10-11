import { TestBed } from '@angular/core/testing';

import { StreetartService } from './streetart.service';

describe('StreetartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreetartService = TestBed.get(StreetartService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StreetartCreateService } from './streetart-create.service';

describe('StreetartCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreetartCreateService = TestBed.get(StreetartCreateService);
    expect(service).toBeTruthy();
  });
});

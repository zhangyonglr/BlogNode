import { TestBed } from '@angular/core/testing';

import { BogService } from './blog.service';

describe('BogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BogService = TestBed.get(BogService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DiscJockeyService } from './disc-jockey.service';

describe('DiscJockeyService', () => {
  let service: DiscJockeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscJockeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

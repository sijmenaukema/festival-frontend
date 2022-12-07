import { TestBed } from '@angular/core/testing';

import { MusicSetService } from './music-set.service';

describe('MusicSetService', () => {
  let service: MusicSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

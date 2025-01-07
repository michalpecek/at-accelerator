import { TestBed } from '@angular/core/testing';

import { EpisodateService } from './episodate.service';

describe('EpisodateService', () => {
  let service: EpisodateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

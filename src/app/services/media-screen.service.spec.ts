import { TestBed } from '@angular/core/testing';

import { MediaScreenService } from './media-screen.service';

describe('MediaScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaScreenService = TestBed.get(MediaScreenService);
    expect(service).toBeTruthy();
  });
});

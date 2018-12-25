import { TestBed } from '@angular/core/testing';

import { NavEventService } from './nav-event.service';

describe('NavEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavEventService = TestBed.get(NavEventService);
    expect(service).toBeTruthy();
  });
});

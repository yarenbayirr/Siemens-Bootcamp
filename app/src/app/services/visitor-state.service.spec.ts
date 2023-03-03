import { TestBed } from '@angular/core/testing';

import { VisitorStateService } from './visitor-state.service';

describe('VisitorStateService', () => {
  let service: VisitorStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SubjectproviderService } from './subjectprovider.service';

describe('SubjectproviderService', () => {
  let service: SubjectproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

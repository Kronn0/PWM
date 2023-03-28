import { TestBed } from '@angular/core/testing';

import { GetSubjectsServiceService } from './get-subjects-service.service';

describe('GetSubjectsServiceService', () => {
  let service: GetSubjectsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubjectsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

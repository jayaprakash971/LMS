import { TestBed } from '@angular/core/testing';

import { IssueResponseService } from './issue-response.service';

describe('IssueResponseService', () => {
  let service: IssueResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

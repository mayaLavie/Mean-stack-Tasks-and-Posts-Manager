import { TestBed } from '@angular/core/testing';

import { UsersBLService } from './users-bl.service';

describe('UsersBLService', () => {
  let service: UsersBLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersBLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

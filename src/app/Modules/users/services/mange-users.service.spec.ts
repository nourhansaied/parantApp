import { TestBed } from '@angular/core/testing';

import { MangeUsersService } from './mange-users.service';

describe('MangeUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MangeUsersService = TestBed.get(MangeUsersService);
    expect(service).toBeTruthy();
  });
});

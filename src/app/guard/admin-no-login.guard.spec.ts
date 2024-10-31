import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminNoLoginGuard } from './admin-no-login.guard';

describe('adminNoLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminNoLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReactiveAuthStoreService } from './reactive-auth-store.service';

describe('ReactiveAuthStoreService', () => {
  let service: ReactiveAuthStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveAuthStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

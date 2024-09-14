import { TestBed } from '@angular/core/testing';

import { ReactiveItemStoreService } from './reactive-item-store.service';

describe('ReactiveItemStoreService', () => {
  let service: ReactiveItemStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveItemStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

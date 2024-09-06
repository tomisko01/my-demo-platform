import { TestBed } from '@angular/core/testing';

import { ReactiveLoadingService } from './reactive-loading.service';

describe('ReactiveLoadingService', () => {
  let service: ReactiveLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EldenItemObservableService } from './elden-item-observable.service';

describe('EldenItemObservableService', () => {
  let service: EldenItemObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EldenItemObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

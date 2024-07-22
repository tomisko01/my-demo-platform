import { TestBed } from '@angular/core/testing';

import { EldenItemFetchService } from './elden-item-fetch.service';

describe('EldenItemFetchService', () => {
  let service: EldenItemFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EldenItemFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

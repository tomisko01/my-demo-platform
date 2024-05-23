import { TestBed } from '@angular/core/testing';

import { EldenItemsService } from './elden-items.service';

describe('EldenItemsService', () => {
  let service: EldenItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EldenItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

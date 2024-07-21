import { TestBed } from '@angular/core/testing';

import { EldenItemRestService } from './elden-item-rest.service';

describe('EldenItemRestService', () => {
  let service: EldenItemRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EldenItemRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

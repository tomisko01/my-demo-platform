import { TestBed } from '@angular/core/testing';

import { TreeShakeableService } from './tree-shakeable.service';

describe('TreeShakeableService', () => {
  let service: TreeShakeableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeShakeableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

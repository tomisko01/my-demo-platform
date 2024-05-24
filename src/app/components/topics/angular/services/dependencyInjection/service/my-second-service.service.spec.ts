import { TestBed } from '@angular/core/testing';

import { MySecondService } from './my-second.service';

describe('MySecondServiceService', () => {
  let service: MySecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

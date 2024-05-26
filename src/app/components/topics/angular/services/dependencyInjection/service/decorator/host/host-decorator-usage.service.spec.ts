import { TestBed } from '@angular/core/testing';

import { HostDecoratorUsageService } from './host-decorator-usage.service';

describe('HostDecoratorUageService', () => {
  let service: HostDecoratorUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostDecoratorUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

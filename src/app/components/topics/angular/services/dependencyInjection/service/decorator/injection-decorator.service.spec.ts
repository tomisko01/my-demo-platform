import { TestBed } from '@angular/core/testing';

import { InjectionDecoratorService } from './injection-decorator.service';

describe('InjectionDecoratorService', () => {
  let service: InjectionDecoratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectionDecoratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

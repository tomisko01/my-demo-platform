import { TestBed } from '@angular/core/testing';

import { ReactiveMessagesService } from './reactive-messages.service';

describe('ReactiveMessagesService', () => {
  let service: ReactiveMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

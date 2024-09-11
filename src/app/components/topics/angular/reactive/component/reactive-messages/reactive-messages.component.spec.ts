import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveMessagesComponent } from './reactive-messages.component';

describe('ReactiveMessagesComponent', () => {
  let component: ReactiveMessagesComponent;
  let fixture: ComponentFixture<ReactiveMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

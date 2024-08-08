import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLoginComponent } from './signal-login.component';

describe('SignalLoginComponent', () => {
  let component: SignalLoginComponent;
  let fixture: ComponentFixture<SignalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

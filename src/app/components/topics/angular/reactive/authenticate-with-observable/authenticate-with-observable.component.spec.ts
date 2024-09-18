import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateWithObservableComponent } from './authenticate-with-observable.component';

describe('AuthenticateWithObservableComponent', () => {
  let component: AuthenticateWithObservableComponent;
  let fixture: ComponentFixture<AuthenticateWithObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticateWithObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticateWithObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

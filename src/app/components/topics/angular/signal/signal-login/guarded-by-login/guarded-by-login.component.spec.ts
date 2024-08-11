import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardedByLoginComponent } from './guarded-by-login.component';

describe('GuardedByLoginComponent', () => {
  let component: GuardedByLoginComponent;
  let fixture: ComponentFixture<GuardedByLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardedByLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardedByLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

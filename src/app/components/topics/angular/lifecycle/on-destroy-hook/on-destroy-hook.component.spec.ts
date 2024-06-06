import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDestroyHookComponent } from './on-destroy-hook.component';

describe('OnDestroyHookComponent', () => {
  let component: OnDestroyHookComponent;
  let fixture: ComponentFixture<OnDestroyHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnDestroyHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnDestroyHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

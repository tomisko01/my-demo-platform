import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDestroyHookChildComponent } from './on-destroy-hook-child.component';

describe('OnDestroyHookChildComponent', () => {
  let component: OnDestroyHookChildComponent;
  let fixture: ComponentFixture<OnDestroyHookChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnDestroyHookChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnDestroyHookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

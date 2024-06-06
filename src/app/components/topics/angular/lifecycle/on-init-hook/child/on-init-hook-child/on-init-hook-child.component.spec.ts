import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInitHookChildComponent } from './on-init-hook-child.component';

describe('OnInitHookChildComponent', () => {
  let component: OnInitHookChildComponent;
  let fixture: ComponentFixture<OnInitHookChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnInitHookChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnInitHookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

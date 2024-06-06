import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnInitHookComponent } from './on-init-hook.component';

describe('OnInitHookComponent', () => {
  let component: OnInitHookComponent;
  let fixture: ComponentFixture<OnInitHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnInitHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnInitHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

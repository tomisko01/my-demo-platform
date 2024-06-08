import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentCheckedHookComponent } from './after-content-checked-hook.component';

describe('AfterContentCheckedHookComponent', () => {
  let component: AfterContentCheckedHookComponent;
  let fixture: ComponentFixture<AfterContentCheckedHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterContentCheckedHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterContentCheckedHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

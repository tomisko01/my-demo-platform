import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentCheckedHookChildComponent } from './after-content-checked-hook-child.component';

describe('AfterContentCheckedHookChildComponent', () => {
  let component: AfterContentCheckedHookChildComponent;
  let fixture: ComponentFixture<AfterContentCheckedHookChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterContentCheckedHookChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterContentCheckedHookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

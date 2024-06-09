import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewCheckedHookComponent } from './after-view-checked-hook.component';

describe('AfterViewCheckedHookComponent', () => {
  let component: AfterViewCheckedHookComponent;
  let fixture: ComponentFixture<AfterViewCheckedHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterViewCheckedHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterViewCheckedHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

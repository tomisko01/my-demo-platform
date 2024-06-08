import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentCheckedHookChildContentComponent } from './after-content-checked-hook-child-content.component';

describe('AfterContentCheckedHookChildContentComponent', () => {
  let component: AfterContentCheckedHookChildContentComponent;
  let fixture: ComponentFixture<AfterContentCheckedHookChildContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterContentCheckedHookChildContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterContentCheckedHookChildContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

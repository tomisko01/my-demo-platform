import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleOverviewChildComponent } from './lifecycle-overview-child.component';

describe('LifecycleOverviewChildComponent', () => {
  let component: LifecycleOverviewChildComponent;
  let fixture: ComponentFixture<LifecycleOverviewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifecycleOverviewChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleOverviewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

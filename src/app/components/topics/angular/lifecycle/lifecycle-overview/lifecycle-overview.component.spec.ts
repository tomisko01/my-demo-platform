import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleOverviewComponent } from './lifecycle-overview.component';

describe('LifecycleOverviewComponent', () => {
  let component: LifecycleOverviewComponent;
  let fixture: ComponentFixture<LifecycleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifecycleOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChangeDetectionComponent } from './custom-change-detection.component';

describe('CustomChangeDetectionComponent', () => {
  let component: CustomChangeDetectionComponent;
  let fixture: ComponentFixture<CustomChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomChangeDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormStep1Component } from './advanced-form-step1.component';

describe('AdvancedFormStep1Component', () => {
  let component: AdvancedFormStep1Component;
  let fixture: ComponentFixture<AdvancedFormStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFormStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedFormStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

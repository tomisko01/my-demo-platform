import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormStep3Component } from './advanced-form-step3.component';

describe('AdvancedFormStep3Component', () => {
  let component: AdvancedFormStep3Component;
  let fixture: ComponentFixture<AdvancedFormStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFormStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedFormStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

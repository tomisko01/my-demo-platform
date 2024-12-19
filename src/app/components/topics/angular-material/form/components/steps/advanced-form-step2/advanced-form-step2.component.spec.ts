import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormStep2Component } from './advanced-form-step2.component';

describe('AdvancedFormStep2Component', () => {
  let component: AdvancedFormStep2Component;
  let fixture: ComponentFixture<AdvancedFormStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFormStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormComponent } from './advanced-form.component';

describe('AdvancedFormComponent', () => {
  let component: AdvancedFormComponent;
  let fixture: ComponentFixture<AdvancedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

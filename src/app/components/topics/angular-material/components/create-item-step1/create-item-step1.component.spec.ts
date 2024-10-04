import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemStep1Component } from './create-item-step1.component';

describe('CreateItemStep1Component', () => {
  let component: CreateItemStep1Component;
  let fixture: ComponentFixture<CreateItemStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateItemStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItemStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemStep2Component } from './create-item-step2.component';

describe('CreateItemStep2Component', () => {
  let component: CreateItemStep2Component;
  let fixture: ComponentFixture<CreateItemStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateItemStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItemStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

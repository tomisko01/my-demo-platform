import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSignalChildComponent } from './input-signal-child.component';

describe('InputSignalChildComponent', () => {
  let component: InputSignalChildComponent;
  let fixture: ComponentFixture<InputSignalChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSignalChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputSignalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

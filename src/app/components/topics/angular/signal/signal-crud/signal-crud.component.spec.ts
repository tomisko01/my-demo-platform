import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalCRUDComponent } from './signal-crud.component';

describe('SignalCRUDComponent', () => {
  let component: SignalCRUDComponent;
  let fixture: ComponentFixture<SignalCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalCRUDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

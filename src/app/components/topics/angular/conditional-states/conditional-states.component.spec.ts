import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStatesComponent } from './conditional-states.component';

describe('ConditionalStatesComponent', () => {
  let component: ConditionalStatesComponent;
  let fixture: ComponentFixture<ConditionalStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionalStatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionalStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalStylesComponent } from './conditional-styles.component';

describe('ConditionalStatesComponent', () => {
  let component: ConditionalStylesComponent;
  let fixture: ComponentFixture<ConditionalStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionalStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

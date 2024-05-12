import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedCComponent } from './highlighted-c.component';

describe('HighlightedCComponent', () => {
  let component: HighlightedCComponent;
  let fixture: ComponentFixture<HighlightedCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightedCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightedCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

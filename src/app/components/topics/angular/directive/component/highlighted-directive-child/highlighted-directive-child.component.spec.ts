import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedDirectiveChildComponent } from './highlighted-directive-child.component';

describe('HighlightedDirectiveChildComponent', () => {
  let component: HighlightedDirectiveChildComponent;
  let fixture: ComponentFixture<HighlightedDirectiveChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightedDirectiveChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightedDirectiveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

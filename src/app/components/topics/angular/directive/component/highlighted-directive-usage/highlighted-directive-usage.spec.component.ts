import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedDirectiveUsageComponent } from './highlighted-directive-usage.component';

describe('HighlightedCComponent', () => {
  let component: HighlightedDirectiveUsageComponent;
  let fixture: ComponentFixture<HighlightedDirectiveUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightedDirectiveUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightedDirectiveUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

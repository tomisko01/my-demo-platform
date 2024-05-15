import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlessDirectiveUsageComponent } from './unless-directive-usage.component';

describe('UnlessDirectiveUsageComponent', () => {
  let component: UnlessDirectiveUsageComponent;
  let fixture: ComponentFixture<UnlessDirectiveUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnlessDirectiveUsageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnlessDirectiveUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

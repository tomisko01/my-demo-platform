import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfForChildComponent } from './cf-for-child.component';

describe('CfForChildComponent', () => {
  let component: CfForChildComponent;
  let fixture: ComponentFixture<CfForChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CfForChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CfForChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

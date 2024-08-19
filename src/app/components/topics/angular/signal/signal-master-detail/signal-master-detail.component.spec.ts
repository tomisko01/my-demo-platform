import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalMasterDetailComponent } from './signal-master-detail.component';

describe('SignalMasterDetailComponent', () => {
  let component: SignalMasterDetailComponent;
  let fixture: ComponentFixture<SignalMasterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalMasterDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

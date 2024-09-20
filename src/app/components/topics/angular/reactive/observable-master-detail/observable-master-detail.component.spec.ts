import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableMasterDetailComponent } from './observable-master-detail.component';

describe('ObservableMasterDetailComponent', () => {
  let component: ObservableMasterDetailComponent;
  let fixture: ComponentFixture<ObservableMasterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableMasterDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

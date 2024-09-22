import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableLocationDetailComponent } from './observable-location-detail.component';

describe('ObservableLocationDetailComponent', () => {
  let component: ObservableLocationDetailComponent;
  let fixture: ComponentFixture<ObservableLocationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableLocationDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableLocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

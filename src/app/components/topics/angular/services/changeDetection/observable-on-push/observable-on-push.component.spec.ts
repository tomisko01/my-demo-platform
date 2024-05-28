import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOnPushComponent } from './observable-on-push.component';

describe('ObservableOnPushComponent', () => {
  let component: ObservableOnPushComponent;
  let fixture: ComponentFixture<ObservableOnPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableOnPushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

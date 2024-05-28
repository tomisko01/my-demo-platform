import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOnPushChildComponent } from './observable-on-push-child.component';

describe('ObservableOnPushChildComponent', () => {
  let component: ObservableOnPushChildComponent;
  let fixture: ComponentFixture<ObservableOnPushChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableOnPushChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservableOnPushChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

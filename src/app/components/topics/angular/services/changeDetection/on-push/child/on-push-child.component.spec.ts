import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushChildComponent } from './on-push-child.component';

describe('ChildComponent', () => {
  let component: OnPushChildComponent;
  let fixture: ComponentFixture<OnPushChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnPushChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnPushChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

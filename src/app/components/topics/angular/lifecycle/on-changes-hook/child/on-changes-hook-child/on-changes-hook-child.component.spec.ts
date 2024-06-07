import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesHookChildComponent } from './on-changes-hook-child.component';

describe('OnChangesHookChildComponent', () => {
  let component: OnChangesHookChildComponent;
  let fixture: ComponentFixture<OnChangesHookChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnChangesHookChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnChangesHookChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

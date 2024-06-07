import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesHookComponent } from './on-changes-hook.component';

describe('OnChangesHookComponent', () => {
  let component: OnChangesHookComponent;
  let fixture: ComponentFixture<OnChangesHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnChangesHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnChangesHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

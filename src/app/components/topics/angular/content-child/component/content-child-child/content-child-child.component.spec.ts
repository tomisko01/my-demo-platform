import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildChildComponent } from './content-child-child.component';

describe('ContentChildChildComponent', () => {
  let component: ContentChildChildComponent;
  let fixture: ComponentFixture<ContentChildChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentChildChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

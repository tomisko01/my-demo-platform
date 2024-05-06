import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionChildComponent } from './content-projection-child.component';

describe('ContentProjectionChildComponent', () => {
  let component: ContentProjectionChildComponent;
  let fixture: ComponentFixture<ContentProjectionChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentProjectionChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentProjectionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

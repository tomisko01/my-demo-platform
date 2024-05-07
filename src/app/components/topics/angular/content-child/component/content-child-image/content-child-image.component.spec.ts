import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildImageComponent } from './content-child-image.component';

describe('ContentChildImageComponent', () => {
  let component: ContentChildImageComponent;
  let fixture: ComponentFixture<ContentChildImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentChildImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentChildImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

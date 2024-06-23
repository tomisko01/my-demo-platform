import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsChildComponent } from './elements-child.component';

describe('ElementsChildComponent', () => {
  let component: ElementsChildComponent;
  let fixture: ComponentFixture<ElementsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementsChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

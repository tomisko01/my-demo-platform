import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiChildComponent } from './hi-child.component';

describe('HiChildComponent', () => {
  let component: HiChildComponent;
  let fixture: ComponentFixture<HiChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HiChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

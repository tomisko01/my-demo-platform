import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcChildComponent } from './vc-child.component';

describe('VcChildComponent', () => {
  let component: VcChildComponent;
  let fixture: ComponentFixture<VcChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VcChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VcChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

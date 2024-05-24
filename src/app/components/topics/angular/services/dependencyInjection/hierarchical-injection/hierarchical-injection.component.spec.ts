import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalInjectionComponent } from './hierarchical-injection.component';

describe('HierarchicalInjecitonComponent', () => {
  let component: HierarchicalInjectionComponent;
  let fixture: ComponentFixture<HierarchicalInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HierarchicalInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchicalInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

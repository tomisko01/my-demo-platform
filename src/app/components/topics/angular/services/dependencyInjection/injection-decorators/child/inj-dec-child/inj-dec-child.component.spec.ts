import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjDecChildComponent } from './inj-dec-child.component';

describe('InjDecChildComponent', () => {
  let component: InjDecChildComponent;
  let fixture: ComponentFixture<InjDecChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjDecChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjDecChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

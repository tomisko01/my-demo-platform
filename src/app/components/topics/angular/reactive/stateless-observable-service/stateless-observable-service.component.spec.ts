import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelessObservableServiceComponent } from './stateless-observable-service.component';

describe('StatelessObservableServiceComponent', () => {
  let component: StatelessObservableServiceComponent;
  let fixture: ComponentFixture<StatelessObservableServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatelessObservableServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatelessObservableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

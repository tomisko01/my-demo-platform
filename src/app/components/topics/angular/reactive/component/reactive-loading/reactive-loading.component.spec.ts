import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveLoadingComponent } from './reactive-loading.component';

describe('ReactiveLoadingComponent', () => {
  let component: ReactiveLoadingComponent;
  let fixture: ComponentFixture<ReactiveLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

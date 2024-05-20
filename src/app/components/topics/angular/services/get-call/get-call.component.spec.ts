import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCallComponent } from './get-call.component';

describe('GetCallComponent', () => {
  let component: GetCallComponent;
  let fixture: ComponentFixture<GetCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

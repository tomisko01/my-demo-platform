import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {InputChildComponent} from './input-child.component';

describe('InputChildComponent', () => {
  let component: InputChildComponent;
  let fixture: ComponentFixture<InputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputChildComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

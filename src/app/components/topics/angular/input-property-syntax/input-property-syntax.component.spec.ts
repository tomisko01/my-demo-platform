import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {InputPropertySyntaxComponent} from './input-property-syntax.component';

describe('InputPropertySyntaxComponent', () => {
  let component: InputPropertySyntaxComponent;
  let fixture: ComponentFixture<InputPropertySyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPropertySyntaxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputPropertySyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

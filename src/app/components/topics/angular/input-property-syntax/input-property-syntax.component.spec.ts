import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertySyntaxComponent } from './input-property-syntax.component';

describe('InputPropertySyntaxComponent', () => {
  let component: InputPropertySyntaxComponent;
  let fixture: ComponentFixture<InputPropertySyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropertySyntaxComponent ]
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

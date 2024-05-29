import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDecoratorChildComponent } from './attribute-decorator-child.component';

describe('ChildComponent', () => {
  let component: AttributeDecoratorChildComponent;
  let fixture: ComponentFixture<AttributeDecoratorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeDecoratorChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDecoratorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

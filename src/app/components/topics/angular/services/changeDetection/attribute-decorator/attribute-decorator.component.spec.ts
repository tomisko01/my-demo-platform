import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDecoratorComponent } from './attribute-decorator.component';

describe('AttributeDecoratorComponent', () => {
  let component: AttributeDecoratorComponent;
  let fixture: ComponentFixture<AttributeDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeDecoratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

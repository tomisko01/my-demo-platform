import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionDecoratorsComponent } from './injection-decorators.component';

describe('InjectionDecoratorsComponent', () => {
  let component: InjectionDecoratorsComponent;
  let fixture: ComponentFixture<InjectionDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InjectionDecoratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjectionDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

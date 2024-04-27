import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgContainerComponent} from './ng-container.component';

describe('NgContainerComponent', () => {
  let component: NgContainerComponent;
  let fixture: ComponentFixture<NgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

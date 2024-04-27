import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CfForComponent} from './cf-for.component';

describe('CfForComponent', () => {
  let component: CfForComponent;
  let fixture: ComponentFixture<CfForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CfForComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CfForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CfIfComponent} from './cf-if.component';

describe('CfIfComponent', () => {
  let component: CfIfComponent;
  let fixture: ComponentFixture<CfIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CfIfComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CfIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

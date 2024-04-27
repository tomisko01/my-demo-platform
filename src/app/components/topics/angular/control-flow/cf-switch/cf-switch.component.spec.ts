import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {CfSwitchComponent} from './cf-switch.component';

describe('CfSwitchComponent', () => {
  let component: CfSwitchComponent;
  let fixture: ComponentFixture<CfSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CfSwitchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CfSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

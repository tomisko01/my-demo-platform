import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CfSwitchComponent} from './cf-switch.component';

describe('CfSwitchComponent', () => {
  let component: CfSwitchComponent;
  let fixture: ComponentFixture<CfSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CfSwitchComponent]
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

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CfForComponent} from './cf-for.component';

describe('CfForComponent', () => {
  let component: CfForComponent;
  let fixture: ComponentFixture<CfForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfForComponent]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPipeComponent } from './own-pipe.component';

describe('OwnPipeComponent', () => {
  let component: OwnPipeComponent;
  let fixture: ComponentFixture<OwnPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

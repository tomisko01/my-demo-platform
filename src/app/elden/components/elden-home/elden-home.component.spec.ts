import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldenHomeComponent } from './elden-home.component';

describe('EldenHomeComponent', () => {
  let component: EldenHomeComponent;
  let fixture: ComponentFixture<EldenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldenHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EldenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

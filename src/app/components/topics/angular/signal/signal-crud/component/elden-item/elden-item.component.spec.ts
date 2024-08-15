import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldenItemComponent } from './elden-item.component';

describe('EldenItemComponent', () => {
  let component: EldenItemComponent;
  let fixture: ComponentFixture<EldenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldenItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EldenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

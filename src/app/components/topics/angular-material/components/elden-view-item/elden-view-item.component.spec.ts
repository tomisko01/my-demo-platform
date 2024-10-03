import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldenViewItemComponent } from './elden-view-item.component';

describe('EldenViewItemComponent', () => {
  let component: EldenViewItemComponent;
  let fixture: ComponentFixture<EldenViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldenViewItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EldenViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

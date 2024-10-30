import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldenEditItemComponent } from './elden-edit-item.component';

describe('EldenViewItemComponent', () => {
  let component: EldenEditItemComponent;
  let fixture: ComponentFixture<EldenEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldenEditItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EldenEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

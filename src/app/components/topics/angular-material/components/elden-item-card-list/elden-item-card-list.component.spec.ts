import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldenItemCardListComponent } from './elden-item-card-list.component';

describe('EldenItemCardListComponent', () => {
  let component: EldenItemCardListComponent;
  let fixture: ComponentFixture<EldenItemCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldenItemCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EldenItemCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

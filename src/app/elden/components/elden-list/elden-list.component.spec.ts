import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldenListComponent } from './elden-list.component';

describe('EldenListComponent', () => {
  let component: EldenListComponent;
  let fixture: ComponentFixture<EldenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EldenListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EldenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

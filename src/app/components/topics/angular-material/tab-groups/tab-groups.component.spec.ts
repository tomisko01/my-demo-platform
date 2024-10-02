import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupsComponent } from './tab-groups.component';

describe('TabGroupsComponent', () => {
  let component: TabGroupsComponent;
  let fixture: ComponentFixture<TabGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

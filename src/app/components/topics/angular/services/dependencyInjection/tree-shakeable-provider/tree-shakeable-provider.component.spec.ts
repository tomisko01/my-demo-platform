import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeShakeableProviderComponent } from './tree-shakeable-provider.component';

describe('TreeShakeableProviderComponent', () => {
  let component: TreeShakeableProviderComponent;
  let fixture: ComponentFixture<TreeShakeableProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreeShakeableProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeShakeableProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

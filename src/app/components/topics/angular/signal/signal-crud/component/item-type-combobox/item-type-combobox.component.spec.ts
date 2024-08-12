import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeComboboxComponent } from './item-type-combobox.component';

describe('ItemTypeComboboxComponent', () => {
  let component: ItemTypeComboboxComponent;
  let fixture: ComponentFixture<ItemTypeComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTypeComboboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemTypeComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

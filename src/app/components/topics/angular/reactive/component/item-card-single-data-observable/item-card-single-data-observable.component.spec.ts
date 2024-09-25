import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardSingleDataObservableComponent } from './item-card-single-data-observable.component';

describe('ItemCardSingleDataObservableComponent', () => {
  let component: ItemCardSingleDataObservableComponent;
  let fixture: ComponentFixture<ItemCardSingleDataObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardSingleDataObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardSingleDataObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

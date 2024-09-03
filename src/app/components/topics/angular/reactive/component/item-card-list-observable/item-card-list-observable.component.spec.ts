import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardListObservableComponent } from './item-card-list-observable.component';

describe('ItemCardListObservableComponent', () => {
  let component: ItemCardListObservableComponent;
  let fixture: ComponentFixture<ItemCardListObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardListObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardListObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

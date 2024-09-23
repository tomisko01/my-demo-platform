import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardObservableComponent } from './item-card-observable.component';

describe('ItemCardObservableComponent', () => {
  let component: ItemCardObservableComponent;
  let fixture: ComponentFixture<ItemCardObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCardObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemCardObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

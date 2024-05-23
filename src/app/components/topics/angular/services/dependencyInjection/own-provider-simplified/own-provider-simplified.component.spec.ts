import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnProviderSimplifiedComponent } from './own-provider-simplified.component';

describe('OwnProviderSimplifiedComponent', () => {
  let component: OwnProviderSimplifiedComponent;
  let fixture: ComponentFixture<OwnProviderSimplifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnProviderSimplifiedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnProviderSimplifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

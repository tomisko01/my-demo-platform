import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnProviderComponent } from './own-provider.component';

describe('OwnProviderComponent', () => {
  let component: OwnProviderComponent;
  let fixture: ComponentFixture<OwnProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

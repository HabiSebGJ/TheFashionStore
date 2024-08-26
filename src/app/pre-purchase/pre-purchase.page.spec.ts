import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrePurchasePage } from './pre-purchase.page';

describe('PrePurchasePage', () => {
  let component: PrePurchasePage;
  let fixture: ComponentFixture<PrePurchasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

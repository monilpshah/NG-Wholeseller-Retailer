import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountproductPage } from './discountproduct.page';

describe('DiscountproductPage', () => {
  let component: DiscountproductPage;
  let fixture: ComponentFixture<DiscountproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

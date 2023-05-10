import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpagePage } from './cartpage.page';

describe('CartpagePage', () => {
  let component: CartpagePage;
  let fixture: ComponentFixture<CartpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

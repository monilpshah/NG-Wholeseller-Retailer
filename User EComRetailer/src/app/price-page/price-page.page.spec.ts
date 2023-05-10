import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePagePage } from './price-page.page';

describe('PricePagePage', () => {
  let component: PricePagePage;
  let fixture: ComponentFixture<PricePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

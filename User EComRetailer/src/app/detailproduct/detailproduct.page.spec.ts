import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproductPage } from './detailproduct.page';

describe('DetailproductPage', () => {
  let component: DetailproductPage;
  let fixture: ComponentFixture<DetailproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

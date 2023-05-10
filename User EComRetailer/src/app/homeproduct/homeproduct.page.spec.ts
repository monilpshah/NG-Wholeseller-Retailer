import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeproductPage } from './homeproduct.page';

describe('HomeproductPage', () => {
  let component: HomeproductPage;
  let fixture: ComponentFixture<HomeproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

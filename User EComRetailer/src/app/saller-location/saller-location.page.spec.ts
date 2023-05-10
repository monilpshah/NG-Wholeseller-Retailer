import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerLocationPage } from './saller-location.page';

describe('SallerLocationPage', () => {
  let component: SallerLocationPage;
  let fixture: ComponentFixture<SallerLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallerLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallerLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

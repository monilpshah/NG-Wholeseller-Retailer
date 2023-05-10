import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPagePage } from './color-page.page';

describe('ColorPagePage', () => {
  let component: ColorPagePage;
  let fixture: ComponentFixture<ColorPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

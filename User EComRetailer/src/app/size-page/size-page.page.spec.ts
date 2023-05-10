import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizePagePage } from './size-page.page';

describe('SizePagePage', () => {
  let component: SizePagePage;
  let fixture: ComponentFixture<SizePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

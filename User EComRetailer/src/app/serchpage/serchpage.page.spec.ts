import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchpagePage } from './serchpage.page';

describe('SerchpagePage', () => {
  let component: SerchpagePage;
  let fixture: ComponentFixture<SerchpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortkurtiPage } from './shortkurti.page';

describe('ShortkurtiPage', () => {
  let component: ShortkurtiPage;
  let fixture: ComponentFixture<ShortkurtiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortkurtiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortkurtiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

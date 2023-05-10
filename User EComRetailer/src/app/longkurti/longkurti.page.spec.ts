import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongkurtiPage } from './longkurti.page';

describe('LongkurtiPage', () => {
  let component: LongkurtiPage;
  let fixture: ComponentFixture<LongkurtiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongkurtiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongkurtiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

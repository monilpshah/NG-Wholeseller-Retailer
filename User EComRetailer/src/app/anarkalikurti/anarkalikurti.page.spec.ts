import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnarkalikurtiPage } from './anarkalikurti.page';

describe('AnarkalikurtiPage', () => {
  let component: AnarkalikurtiPage;
  let fixture: ComponentFixture<AnarkalikurtiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnarkalikurtiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnarkalikurtiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

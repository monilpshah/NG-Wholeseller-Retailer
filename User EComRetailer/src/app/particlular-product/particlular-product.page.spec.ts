import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlularProductPage } from './particlular-product.page';

describe('ParticlularProductPage', () => {
  let component: ParticlularProductPage;
  let fixture: ComponentFixture<ParticlularProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticlularProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticlularProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerSideProductComponent } from './wholesaler-side-product.component';

describe('WholesalerSideProductComponent', () => {
  let component: WholesalerSideProductComponent;
  let fixture: ComponentFixture<WholesalerSideProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerSideProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerSideProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

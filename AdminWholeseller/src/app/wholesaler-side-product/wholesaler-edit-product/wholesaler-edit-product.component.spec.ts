import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerEditProductComponent } from './wholesaler-edit-product.component';

describe('WholesalerEditProductComponent', () => {
  let component: WholesalerEditProductComponent;
  let fixture: ComponentFixture<WholesalerEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

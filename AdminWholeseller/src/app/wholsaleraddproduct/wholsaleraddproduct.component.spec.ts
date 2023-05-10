import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholsaleraddproductComponent } from './wholsaleraddproduct.component';

describe('WholsaleraddproductComponent', () => {
  let component: WholsaleraddproductComponent;
  let fixture: ComponentFixture<WholsaleraddproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholsaleraddproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholsaleraddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

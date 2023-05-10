
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WholesalerMenuComponent } from './wholesaler-menu.component';

describe('WholesalerMenuComponent', () => {
  let component: WholesalerMenuComponent;
  let fixture: ComponentFixture<WholesalerMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [WholesalerMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesalerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

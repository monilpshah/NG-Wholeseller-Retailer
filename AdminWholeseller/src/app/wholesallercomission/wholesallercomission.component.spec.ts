import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesallercomissionComponent } from './wholesallercomission.component';

describe('WholesallercomissionComponent', () => {
  let component: WholesallercomissionComponent;
  let fixture: ComponentFixture<WholesallercomissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesallercomissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesallercomissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

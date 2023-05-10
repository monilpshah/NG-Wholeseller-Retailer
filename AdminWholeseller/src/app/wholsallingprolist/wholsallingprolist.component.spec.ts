import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholsallingprolistComponent } from './wholsallingprolist.component';

describe('WholsallingprolistComponent', () => {
  let component: WholsallingprolistComponent;
  let fixture: ComponentFixture<WholsallingprolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholsallingprolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholsallingprolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholsallerComponent } from './wholsaller.component';

describe('WholsallerComponent', () => {
  let component: WholsallerComponent;
  let fixture: ComponentFixture<WholsallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholsallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholsallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

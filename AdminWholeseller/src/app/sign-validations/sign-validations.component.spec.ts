import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignValidationsComponent } from './sign-validations.component';

describe('SignValidationsComponent', () => {
  let component: SignValidationsComponent;
  let fixture: ComponentFixture<SignValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

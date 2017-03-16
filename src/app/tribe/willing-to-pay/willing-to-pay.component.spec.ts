import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingToPayComponent } from './willing-to-pay.component';

describe('WillingToPayComponent', () => {
  let component: WillingToPayComponent;
  let fixture: ComponentFixture<WillingToPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillingToPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillingToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

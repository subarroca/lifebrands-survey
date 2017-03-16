import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillingToRepeatComponent } from './willing-to-repeat.component';

describe('WillingToRepeatComponent', () => {
  let component: WillingToRepeatComponent;
  let fixture: ComponentFixture<WillingToRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillingToRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillingToRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

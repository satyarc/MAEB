import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRenewalsComponent } from './product-renewals.component';

describe('ProductRenewalsComponent', () => {
  let component: ProductRenewalsComponent;
  let fixture: ComponentFixture<ProductRenewalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRenewalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRenewalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPartnersComponent } from './business-partners.component';

describe('BusinessPartnersComponent', () => {
  let component: BusinessPartnersComponent;
  let fixture: ComponentFixture<BusinessPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

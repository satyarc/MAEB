import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPartnersComponent } from './sales-partners.component';

describe('SalesPartnersComponent', () => {
  let component: SalesPartnersComponent;
  let fixture: ComponentFixture<SalesPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

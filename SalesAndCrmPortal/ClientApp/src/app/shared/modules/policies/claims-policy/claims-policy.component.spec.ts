import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsPolicyComponent } from './claims-policy.component';

describe('ClaimsPolicyComponent', () => {
  let component: ClaimsPolicyComponent;
  let fixture: ComponentFixture<ClaimsPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

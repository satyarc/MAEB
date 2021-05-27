import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsSectionComponent } from './claims-section.component';

describe('ClaimsSectionComponent', () => {
  let component: ClaimsSectionComponent;
  let fixture: ComponentFixture<ClaimsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

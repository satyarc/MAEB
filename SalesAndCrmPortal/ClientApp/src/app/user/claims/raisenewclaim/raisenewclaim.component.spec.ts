import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisenewclaimComponent } from './raisenewclaim.component';

describe('RaisenewclaimComponent', () => {
  let component: RaisenewclaimComponent;
  let fixture: ComponentFixture<RaisenewclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisenewclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisenewclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

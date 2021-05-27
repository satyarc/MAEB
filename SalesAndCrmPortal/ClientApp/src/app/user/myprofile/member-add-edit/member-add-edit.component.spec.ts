import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddEditComponent } from './member-add-edit.component';

describe('MemberAddEditComponent', () => {
  let component: MemberAddEditComponent;
  let fixture: ComponentFixture<MemberAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

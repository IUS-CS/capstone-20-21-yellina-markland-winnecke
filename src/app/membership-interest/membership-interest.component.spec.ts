import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipInterestComponent } from './membership-interest.component';

describe('MembershipInterestComponent', () => {
  let component: MembershipInterestComponent;
  let fixture: ComponentFixture<MembershipInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
    //expect(component).toBeTruthy();
  //});
});

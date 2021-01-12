import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingMembersInformationComponent } from './leading-members-information.component';

describe('LeadingMembersInformationComponent', () => {
  let component: LeadingMembersInformationComponent;
  let fixture: ComponentFixture<LeadingMembersInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadingMembersInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadingMembersInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

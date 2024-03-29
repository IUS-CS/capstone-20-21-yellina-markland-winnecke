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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h5 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h5').textContent).toContain('If you are interested in a Membership, complete the form below.');
  });
});

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

  it('should render title in a h2 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Voiture 1250 Officers');
  });
});

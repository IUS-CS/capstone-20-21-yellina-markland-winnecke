import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAndEventsComponent } from './news-and-events.component';

describe('NewsAndEventsComponent', () => {
  let component: NewsAndEventsComponent;
  let fixture: ComponentFixture<NewsAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('News & Events');
  });
});

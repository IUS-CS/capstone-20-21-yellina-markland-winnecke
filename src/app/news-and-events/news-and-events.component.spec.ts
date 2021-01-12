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
});

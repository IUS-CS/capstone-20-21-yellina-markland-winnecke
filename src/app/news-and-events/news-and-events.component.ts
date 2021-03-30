import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.css']
})
export class NewsAndEventsComponent {
@Input() msgFrom: any[];
}

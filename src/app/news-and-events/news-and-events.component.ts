import { Component, Input, NgZone, OnInit } from '@angular/core';
import { MbscEventcalendarOptions, MbscCalendarEvent  } from '@mobiscroll/angular';

// This is for testing purposes. Please use your own API KEY. You can get it from https://developers.google.com/calendar/quickstart/js
const API_KEY = 'AIzaSyDwyHB0MH28ECYZc7PTF5EikS_-PHUAvfM';
// This is for testing purposes. Please use your own CLIENT ID. You can get it from https://developers.google.com/calendar/quickstart/js
const CLIENT_ID = '755711223458-qcm6u6es7t00ko1ef9vcopjhsvc9dcph.apps.googleusercontent.com';

const CALENDAR_ID = 'fortyandeightv1250@gmail.com';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const win: any = window;
const now = new Date();

let calApiLoaded: boolean;

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.css']
})
export class NewsAndEventsComponent implements OnInit {
  firstDay: Date = new Date(now.getFullYear(), now.getMonth() - 1, -7);
  lastDay: Date = new Date(now.getFullYear(), now.getMonth() + 2, 14);

  calSettings: MbscEventcalendarOptions = {
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: false,
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false,
    view: {
      calendar: {
        labels: true
      }
    },
    onPageLoading: (event: any) => {
      const year = event.month.getFullYear();
      const month = event.month.getMonth();

      // Calculate dates
      // (pre-load events for previous and next months as well)
      this.firstDay = new Date(year, month - 1, -7);
      this.lastDay = new Date(year, month + 2, 14);

      this.loadEvents(this.firstDay, this.lastDay);
    }
  };

  myEvents: MbscCalendarEvent[] = [];

  // Init the Google API client
  initClient = () => {
    win.gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      calApiLoaded = true;
      this.loadEvents(this.firstDay, this.lastDay);
    });
  }

  constructor(public zone: NgZone) { }

  ngOnInit(): void {
    // Load the Google API Client
    win.onGoogleLoad = () => {
      win.gapi.load('client', this.initClient);
    };
    this.loadGoogleSDK();
  }

  // Load the SDK asynchronously
  loadGoogleSDK(): void {
    ((d: any, s: any, id: any) => {
      let js: any;
      const fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        win.onGoogleLoad();
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/api.js?onload=onGoogleLoad';
      js.onload = 'onGoogleLoad';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  }

  // Load events from Google Calendar between 2 dates
  loadEvents(first: Date, last: Date): void {
    // Only load events if the Google API finished loading
    if (calApiLoaded) {
      win.gapi.client.calendar.events.list({
        calendarId: CALENDAR_ID,
        timeMin: first.toISOString(),
        timeMax: last.toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 100,
        orderBy: 'startTime'
      }).then((response: any) => {
        let event;
        const events = response.result.items;
        const eventList: MbscCalendarEvent[] = [];
        let end;
        // Process event list
        for (const value of events) {
          event = value;
          end = new Date(event.end.date || event.end.dateTime);

          eventList.push({
            start: new Date(event.start.date || event.start.dateTime),
            end: event.end.date ? new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1) : end,
            title: event.summary || 'No Title',
            allDay: !event.start.dateTime
          });
        }
        this.zone.run(() => {
          // Pass the processed events to the calendar
          this.myEvents = eventList;
        });
      });
    }
  }
}

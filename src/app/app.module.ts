import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { InformationComponent } from './information/information.component';
import { MembershipInterestComponent } from './membership-interest/membership-interest.component';
import { LeadingMembersInformationComponent } from './leading-members-information/leading-members-information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AgmCoreModule} from '@agm/core';
import { AgmDirectionModule} from 'agm-direction';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewsAndEventsComponent,
    InformationComponent,
    MembershipInterestComponent,
    LeadingMembersInformationComponent,
    PageNotFoundComponent,
    AdminComponent,
  ],

  imports: [ 
    MbscModule, 
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      // fortyandeightv1250 account API key
      // only accepts Maps Javascript API requests
      // only accepts requests from fortyandeightnewalbany.com
      apiKey: 'AIzaSyCbCJwLsf18SNiRmVjsYpPzb1jpOLAKvqM',
      //apiKey: 'AIzaSyAZ5xWwEJi3nLhtKiTW83MA4tpvsZP7pZg', // bwwinnec account temp key - restricted, will delete
    }),
    AgmDirectionModule,     // agm-direction
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

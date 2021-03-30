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
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyAZ5xWwEJi3nLhtKiTW83MA4tpvsZP7pZg', // temporary test API key (bwwinnec@iu.edu account)
    }),
    AgmDirectionModule,     // agm-direction
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

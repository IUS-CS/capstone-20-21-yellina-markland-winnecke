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
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewsAndEventsComponent,
    InformationComponent,
    MembershipInterestComponent,
    LeadingMembersInformationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

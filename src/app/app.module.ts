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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


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
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

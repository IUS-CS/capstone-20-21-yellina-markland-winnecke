import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NewsAndEventsComponent} from './news-and-events/news-and-events.component';
import {LeadingMembersInformationComponent} from './leading-members-information/leading-members-information.component';
import {MembershipInterestComponent} from './membership-interest/membership-interest.component';
import {InformationComponent} from './information/information.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AdminComponent} from './admin/admin.component';
import {AdminPageComponent} from './admin-page/admin-page.component';


const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'newsAndEvents', component: NewsAndEventsComponent },
  { path: 'leadingMembersInformation', component: LeadingMembersInformationComponent },
  { path: 'membershipInterest', component: MembershipInterestComponent },
  { path: 'information', component: InformationComponent },
  { path: '', redirectTo: '/homePage', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent},
  { path: 'admin-page', component: AdminPageComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

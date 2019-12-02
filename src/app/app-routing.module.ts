import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventDetailsInfoComponent } from './event-details-info/event-details-info.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'eventDetails', component: EventDetailsComponent },
  { path: 'eventDetailsInfo', component: EventDetailsInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

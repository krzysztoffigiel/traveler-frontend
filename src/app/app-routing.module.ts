import { NotFoundComponent } from './not-found/not-found.component';
import { PathResolveService } from './path-resolve.service';
import { MyTripDetailsComponent } from './my-trips/my-trip-details/my-trip-details.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { paths } from './app-paths';

const routes: Routes = [
  { path: '', redirectTo: 'myTrips', pathMatch: 'full'},
  {
    path: paths.myTrips,
    component: MyTripsComponent
  },
  {
    path: paths.myTrips + '/' + paths.myTripDetails,
    component: MyTripDetailsComponent
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService,
    },
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

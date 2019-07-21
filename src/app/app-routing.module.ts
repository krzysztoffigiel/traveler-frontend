import { MyTripsComponent } from './my-trips/my-trips.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'myTrips', pathMatch: 'full'},
  {
    path: 'myTrips',
    component: MyTripsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NPM Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

// Components
import { MyTripsComponent } from './my-trips/my-trips.component';
import { MyTripDetailsComponent } from './my-trips/my-trip-details/my-trip-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTripsComponent,
    MyTripDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSVNydqvSzWvkDQEmP2TR__3HzzodL0Gw',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


import { MyTripsComponent } from './my-trips/my-trips.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTripsComponent,
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

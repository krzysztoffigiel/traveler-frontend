import { Component, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-my-trips',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {

  geocoder: any;

  texto = 'Wenceslau Braz - Cuidado com as cargas';
  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;
  label = 'trip #1';

  trips = [
    {
      tripTitle: 'Albania',
      tripDescription: 'Some quick example text to build on the card title and make up the bulk of the card7\'s content.',
      tripImage: 'https://zielonamapa.pl/wp-content/uploads/flickr/albania-3.jpg'
    },
    {
      tripTitle: 'Grecja',
      tripDescription: 'Some quick example text to build on the card title and make up the bulk of the card7\'s content.',
      tripImage: 'https://i.wpimg.pl/O/644x430/d.wpimg.pl/789201725--821815787/santorini.jpg'
    },
    {
      tripTitle: 'Turcja',
      tripDescription: 'Some quick example text to build on the card title and make up the bulk of the card7\'s content.',
      tripImage: 'https://fly.pl/wp-content/uploads/2018/02/Stambu%C5%82-1.jpg'
    },
    {
      tripTitle: 'Hiszpania',
      tripDescription: 'Some quick example text to build on the card title and make up the bulk of the card7\'s content.',
      tripImage: 'https://skrzydlatewakacje.pl/wp-content/uploads/2017/02/barcelona-gaudi.jpg'
    },
    {
      tripTitle: 'Gruzja',
      tripDescription: 'Some quick example text to build on the card title and make up the bulk of the card7\'s content.',
      tripImage: 'https://i.iplsc.com/widoki-zapierajace-dech-do-tego-mozna-sie-tu-przyzwyczaic/00080O0YPPG6ELTB-C122-F4.jpg'
    },
    {
      tripTitle: 'Zanzibar',
      tripDescription: 'Some quick example text to build on the card title and make up the bulk of the card7\'s content.',
      tripImage: 'http://www.globfoterka.pl/wp-content/uploads/2018/07/FILE7552-Kopiowanie.jpg'
    },
  ];

  constructor() {

  }

  ngOnInit() {
    console.log('trip: ', this.trips[0].tripTitle);
  }

}

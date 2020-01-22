
import { Component, OnInit } from '@angular/core';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  markers: any[];
  map: any;
  constructor() {
    this.markers = []; // TODO: initialize array of markers
  }
  ionViewDidEnter() { // run when app is opened
    /*Initializing Map*/
    // tslint:disable-next-line: max-line-length
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWVjaGFuIiwiYSI6ImNqbXd4ZmYzYTA0eWcza3J0NzVsNnNkcWoifQ.PQuBcFIs9STCQ6uf8DrJNw'; // token from previous group
    this.map = new mapboxgl.Map({ // initialize new map object
      style: 'mapbox://styles/aechan/cjmwxodn95lir2rmoq60ydb3m', // style defined by previous group
      center: [-89.4125, 43.0766], // center lat and longitude
      zoom: 15,
      pitch: 0,
      minZoom: 1, // restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });
    // add a single marker
    let marker = new mapboxgl.Marker()
      .setLngLat([-89.4125, 43.0766])
      .addTo(this.map);
  }

  ngOnInit() { }
}

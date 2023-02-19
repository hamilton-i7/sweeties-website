/// <reference types="@types/google.maps" />

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  apiLoaded$: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 9.337507685621455, lng: -79.89034742336428 },
  };
  markerOptions: google.maps.MarkerOptions = {
    position: { lat: 9.337507685621455, lng: -79.89034742336428 },
  };

  constructor(httpClient: HttpClient) {
    this.apiLoaded$ = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.mapsApiKey}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}

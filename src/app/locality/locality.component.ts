import { Component } from '@angular/core';
import {google} from "angular2-google-maps/esm/core/services/google-maps-types";
import {Response, Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {MovieService} from "../movies/movies.service";

@Component({
  selector: 'my-locality',
  templateUrl: './locality.component.html'
})
export class LocalityComponent  {
  constructor(private http: Http,private movieService: MovieService) {
  }

  public location = [
    { value: 'r', display: 'Recircle Store' },
    { value: 'm', display: 'Meet Up' }
  ];

  locality = {};
  mapCoordinates = {
    lat: 18.5074,
    lng: 73.8077,
    place: 'Renters Store'
  };

  addressList = [
    {
      'name' : 'ABC',
      'addr' : 'Kothrud',
      'place' : "Renter's Location"
    },
    {
      'name' : 'XYZ',
      'addr' : 'Solapur',
      'place' : "Owner's Location"
    }
  ];

  /// This function computes lattitude and longitude when user enter the address
  GetLocation(): void {
    //console.log("Location is : ");
    this.movieService.getCoordinates(this.addressList[1].addr).subscribe(
      result => {
        console.log(result.results);
        this.mapCoordinates = result.results[0].geometry.location;
        this.mapCoordinates.place = "Owner's Location";
        console.log(this.mapCoordinates);
      },
      error => console.log(error));
  }

  addressUpdated(addr) {
    //console.log(addr);
    this.mapCoordinates = addr;
    this.mapCoordinates.place = "Custom Location";
    console.log("place is : ")
    console.log(this.mapCoordinates);

  }
}

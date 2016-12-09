import {Component, Output, Input} from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";
//import {GoogleplaceDirective} from "./googleplace.directive";
// import { GoogleMapComponent } from "./google-map/google-map.component";

@Component({
  selector: 'google-api',
  templateUrl: './google.component.html',
})
export class GoogleComponent {

  @Output() addressUpdated = new EventEmitter();

  public address: Object;
  addressDetails = {};

  constructor() {
  }

  getAddress(place: Object) {
    console.log(place);
    this.address = place['formatted_address'];
    console.log("addresssssssss: ");
    console.log(this.address);
    var location = place['geometry']['location'];
    var lat = location.lat();
    var lng = location.lng();

    this.addressDetails = {
      'lat' : lat,
      'lng' : lng
    };
    this.addressUpdated.emit(this.addressDetails);
  }
}

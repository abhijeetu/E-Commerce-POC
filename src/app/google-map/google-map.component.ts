import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `]
})
export class GoogleMapComponent implements OnChanges {
  // google maps zoom level
  zoom: number = 4;

  // initial center position for the map
  lat: number = 18.5074;
  lng: number = 73.8077;
  place: 'Renters Location';
  markers: marker[] = [];
  @Input() inputAddress;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["inputAddress"]) {
      console.log(changes["inputAddress"].currentValue);
      let addr = changes["inputAddress"].currentValue;
      if (addr) {
        // this.markers.pop();
        this.markers.push({
          lat: changes["inputAddress"].currentValue.lat,
          lng: changes["inputAddress"].currentValue.lng,
          place: changes["inputAddress"].currentValue.place
        });
        console.log(this.markers);
      }
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      place : $event.coords.place
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  constructor() {
    this.markers.push({
      lat: this.lat,
      lng: this.lng,
      place : this.place
    });
  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  place : string;
}

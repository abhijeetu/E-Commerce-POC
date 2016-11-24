import { Component, ViewContainerRef } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.css';
import '../style/font-awesome.min.css';
// import '../style/prettyPhoto.css';
import '../style/price-range.css';
import '../style/animate.css';
import '../style/main.css';
import '../style/responsive.css';



@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html'// styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  private viewContainerRef: ViewContainerRef;

  public constructor(private api: ApiService, viewContainerRef: ViewContainerRef) {
    // Do something with api
    this.viewContainerRef = viewContainerRef;
  }
}

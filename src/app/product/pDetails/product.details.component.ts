declare let CloudZoom: any;

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import '../../../js/cloudzoom.js'

@Component({
  selector: 'product-details',
  templateUrl: './product.details.component.html'
})
export class ProductDeatailsComponent implements OnInit {

  id: any;
  test: any;

  constructor(router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('Hello Product Deatails');
    CloudZoom.quickStart();
    this.route.params.subscribe(params => {
      this.id = params['pid'];
      console.log('pid=' + this.id);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'product-details',
  templateUrl: './product.details.component.html'
})
export class ProductDeatailsComponent implements OnInit {

  id:any;
  test:any;

  constructor(router:Router, private route : ActivatedRoute) {

  }

  ngOnInit() {
    console.log('Hello Product Deatails');
    this.route.params.subscribe(params => {
      this.id = params['pid'];
      // this.test = params['test'];
      console.log("pid="+this.id);
    })
  }

}

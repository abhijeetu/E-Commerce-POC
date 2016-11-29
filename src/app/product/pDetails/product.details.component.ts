declare let CloudZoom: any;
import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import '../../../js/cloudzoom.js'
import {ModalDemoComponent} from '../../pop-up/pop-up.component';

@Component({
  selector: 'product-details',
  templateUrl: './product.details.component.html'
})
export class ProductDeatailsComponent implements OnInit {

  @ViewChild(ModalDemoComponent) public modal: ModalDemoComponent;
  @Input() itemStatus: any;
  id: any;
  modalData1 = {
    'typeOfModal' : 'addToCart'
  };


  constructor(router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    CloudZoom.quickStart();
    this.route.params.subscribe(params => {
      this.modalData1['name'] = params['name'];
      this.modalData1['id'] = params['id'];
      this.modalData1['price'] = params['price'];
      this.modalData1['imagePath'] = params['imagePath'];
      this.modalData1['quantity'] = params['quantity'];
    });
  }
}

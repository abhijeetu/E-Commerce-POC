declare let CloudZoom: any;
import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import '../../../js/cloudzoom.js'
import {ModalDemoComponent} from '../../pop-up/pop-up.component';

@Component({
  selector: 'product-details',
  templateUrl: './product.details.component.html'
})
export class ProductDeatailsComponent implements OnInit {

  @ViewChild(ModalDemoComponent) public modal: ModalDemoComponent;
  @Output() addressDetails = new EventEmitter();
  id: any;
  modalData1 = {
    'typeOfModal': 'addToCart'
  };
  showMap = false;
  inputAddress : any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

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

  addressUpdated(addr) {
    this.inputAddress = addr;
    this.addressDetails.emit(addr);
    this.showMap = true;
  }

  redirectToLocality() {
    this.router.navigate(['/locality']);
  }


}

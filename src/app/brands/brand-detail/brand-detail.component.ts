import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'brand-detail',
  templateUrl: './brand-detail.component.html'
})
export class BrandDetailComponent implements OnInit {

  // property-binding
  @Input() selectedBrand;

  constructor() {

  }

  ngOnInit() {

  }

  getSelectedItem(selectedItem) {
    console.log(selectedItem);
  }

}

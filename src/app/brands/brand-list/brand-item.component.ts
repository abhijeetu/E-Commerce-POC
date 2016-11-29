import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'brand-item',
  templateUrl: './brand-item.component.html'
})
export class BrandItemComponent implements OnInit {

  // set from outside of this component
  @Input() recipe;

  // recipeId : number;

  constructor() { }

  ngOnInit() {
  }

}

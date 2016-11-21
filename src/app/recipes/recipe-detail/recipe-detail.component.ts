import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  // property-binding
  @Input() selectedRecipe;

  constructor() {

  }

  ngOnInit() {

  }

  getSelectedItem(selectedItem) {
    console.log(selectedItem);
  }

}

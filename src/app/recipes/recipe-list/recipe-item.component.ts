import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  // set from outside of this component
  @Input() recipe;

  // recipeId : number;

  constructor() { }

  ngOnInit() {
  }

}

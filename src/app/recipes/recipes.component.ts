import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from './recipe-list';
import {RecipeDetailComponent} from './recipe-detail';
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  // after event
  selectedRecipe : Recipe;

  constructor() {
    console.log("Recipes constructor");
  }

  ngOnInit() {
    console.log("Recipes onInit");
  }

}

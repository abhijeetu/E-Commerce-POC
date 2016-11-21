import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  // recipes:Recipe[] = [];

  // when event will happen

  @Output() recipeSelected = new EventEmitter();
  allItems = [];
  items = [
    {

      'brandName': 'Nikon',
      'arr': [
        {
          'id': 101,
          'name': 'Nikon D3300 24.2MP Digital SLR (Black)',
          'description': 'good product',
          'imagePath': 'http://images.cdn.stuff.tv/sites/stuff.tv/files/styles/flexslider_desktop/public/Nikon-d300-dslr-camera-review-body-003.jpg?itok=CeOJJU2N&timestamp=1423217554',
          'price': '$73'
        },
        {
          'id': 102,
          'name': 'Nikon D3300 24.2MP Digital SLR (Black)',
          'description': 'good product',
          'imagePath': 'http://images.cdn.stuff.tv/sites/stuff.tv/files/styles/flexslider_desktop/public/Nikon-d300-dslr-camera-review-body-003.jpg?itok=CeOJJU2N&timestamp=1423217554',
          'price': '$48'
        },
        {
          'id': 103,
          'name': 'Nikon D3300 24.2MP Digital SLR (Black)',
          'description': 'good product',
          'imagePath': 'http://images.cdn.stuff.tv/sites/stuff.tv/files/styles/flexslider_desktop/public/Nikon-d300-dslr-camera-review-body-003.jpg?itok=CeOJJU2N&timestamp=1423217554',
          'price': '$90'
        },
        {
          'id': 104,
          'name': 'Nikon D3300 24.2MP Digital SLR (Black)',
          'description': 'good product',
          'imagePath': 'http://images.cdn.stuff.tv/sites/stuff.tv/files/styles/flexslider_desktop/public/Nikon-d300-dslr-camera-review-body-003.jpg?itok=CeOJJU2N&timestamp=1423217554',
          'price': '$79'
        },
        {
          'id': 105,
          'name': 'Nikon D3300 24.2MP Digital SLR (Black)',
          'description': 'good product',
          'imagePath': 'http://images.cdn.stuff.tv/sites/stuff.tv/files/styles/flexslider_desktop/public/Nikon-d300-dslr-camera-review-body-003.jpg?itok=CeOJJU2N&timestamp=1423217554',
          'price': '$59'
        },
        {
          'id': 106,
          'name': 'Nikon D3300 24.2MP Digital SLR (Black)',
          'description': 'good product',
          'imagePath': 'http://images.cdn.stuff.tv/sites/stuff.tv/files/styles/flexslider_desktop/public/Nikon-d300-dslr-camera-review-body-003.jpg?itok=CeOJJU2N&timestamp=1423217554',
          'price': '$61'
        }
      ]
    },
    {
      'brandName': 'Sony',
      'arr': [
        {
          'id': 108,
          'name': 'Nikon Coolpix A10 Point and Shoot Digital Camera (Black) ',
          'description': '8GB Memory Card and Camera Case',
          'imagePath': 'http://www.imaging-resource.com/PRODS/AA330/ZBEAUTY-LG.JPG',
          'price': '$90'
        },
        {
          'id': 109,
          'name': 'Nikon Coolpix A10 Point and Shoot Digital Camera (Black) ',
          'description': '8GB Memory Card and Camera Case',
          'imagePath': 'http://www.imaging-resource.com/PRODS/AA330/ZBEAUTY-LG.JPG',
          'price': '$69'
        },
        {
          'id': 110,
          'name': 'Nikon Coolpix A10 Point and Shoot Digital Camera (Black) ',
          'description': '8GB Memory Card and Camera Case',
          'imagePath': 'http://www.imaging-resource.com/PRODS/AA330/ZBEAUTY-LG.JPG',
          'price': '$80'
        },
        {
          'id': 111,
          'name': 'Nikon Coolpix A10 Point and Shoot Digital Camera (Black) ',
          'description': '8GB Memory Card and Camera Case',
          'imagePath': 'http://www.imaging-resource.com/PRODS/AA330/ZBEAUTY-LG.JPG',
          'price': '$54'
        },
        {
          'id': 112,
          'name': 'Nikon Coolpix A10 Point and Shoot Digital Camera (Black) ',
          'description': '8GB Memory Card and Camera Case',
          'imagePath': 'http://www.imaging-resource.com/PRODS/AA330/ZBEAUTY-LG.JPG',
          'price': '$56'
        },
        {
          'id': 113,
          'name': 'Nikon Coolpix A10 Point and Shoot Digital Camera (Black) ',
          'description': '8GB Memory Card and Camera Case',
          'imagePath': 'http://www.imaging-resource.com/PRODS/AA330/ZBEAUTY-LG.JPG',
          'price': '$73'
        }
      ]

    }
  ];

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe.arr);
  }

  constructor() {
    console.log('Constructor : ');

    for (let i = 0; i < this.items.length; i++) {
      for (let j = 0; j < this.items[i].arr.length; j++) {
        this.allItems.push(this.items[i].arr[j]);
      }
    }

    console.log(this.allItems);
    this.recipeSelected.emit(this.allItems);
  }

  ngOnInit() {
    console.log('oninit : ');
    this.recipeSelected.emit(this.allItems);
  }

}

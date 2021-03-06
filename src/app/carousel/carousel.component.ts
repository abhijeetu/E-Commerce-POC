import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'home-page-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

  public myInterval: number = 3000;
  public noWrapSlides: boolean = false;
  public slides: Array<any> = [];

  constructor(private router: Router) {
    for (let i = 0; i < 3; i++) {
      this.addSlide();
    }
  }

  ngOnInit() {

  }


  public addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index: number): void {
    this.slides.splice(index, 1);
  }

  public gotoDetails(id) {
    this.router.navigate(['/details', id]);
  }
}

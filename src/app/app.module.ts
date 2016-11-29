import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { MenuComponent } from './menu/menu.component';
import { ProductDeatailsComponent } from './product/pDetails/product.details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { LoginComponent } from "./login/login.component";
import { AuthenticationService } from "./login/authentication.service";
import { RatingDemoComponent } from "./rating/rating.component";
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TooltipDemoComponent } from './tooltip/tooltip.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CarouselModule,
    routing,
    RatingModule,
    TooltipModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ProductDeatailsComponent,
    CarouselComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    LoginComponent,
    RatingDemoComponent,
    TooltipDemoComponent
  ],
  providers: [
    ApiService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

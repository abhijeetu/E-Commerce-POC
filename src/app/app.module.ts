import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {CarouselModule, ModalModule} from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { MenuComponent } from './menu/menu.component';
import { ProductDeatailsComponent } from './product/pDetails/product.details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import {BrandDetailComponent} from './brands/brand-detail/brand-detail.component';
import {ModalDemoComponent} from './pop-up/pop-up.component';
import {BrandItemComponent} from './brands/brand-list/brand-item.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CarouselModule,
    routing,
    ModalModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ProductDeatailsComponent,
    CarouselComponent,
    BrandListComponent,
    BrandItemComponent,
    ModalDemoComponent,
    BrandDetailComponent
  ],
  providers: [
    ApiService
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

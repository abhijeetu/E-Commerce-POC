import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductDeatailsComponent } from "./product/pDetails/product.details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'details', component: ProductDeatailsComponent}
];

export const routing = RouterModule.forRoot(routes);

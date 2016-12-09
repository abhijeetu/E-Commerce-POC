import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocalityComponent } from './locality/locality.component';
import { ProductDeatailsComponent } from './product/pDetails/product.details.component';
import {MoviesComponent} from "./movies/movies.component";
import {MovieDetailsComponent} from "./movies/movie.details.component";
import {NewMovieComponent} from "./movies/movie.new.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'details', component: ProductDeatailsComponent},
  { path:'movies', component: MoviesComponent },
  { path:'movieDetails/:id', component: MovieDetailsComponent },
  { path:'createNewMovie', component: NewMovieComponent },
  { path:'createNewMovie/:id', component: NewMovieComponent },
  { path: 'locality', component: LocalityComponent}
];

export const routing = RouterModule.forRoot(routes);

import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

export const routes: Routes = [
    
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'proddet/:id', component: ProductDetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'about', component: AboutComponent },
   //  wild card route
  { path: '**', component: PageNotFoundComponent },


];

import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { LoginComponent } from './components/join-us/login/login.component';
import { SignUpComponent } from './components/join-us/sign-up/sign-up.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { userGuard } from './Guards/user-guard.guard';

export const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'products', component: ProductlistComponent },
  // { path: 'proddet/:id', component: ProductDetailsComponent },
  // { path: 'movies', component: MoviesComponent },
  // { path: 'about', component: AboutComponent },
  //  //  wild card route
  // { path: '**', component: PageNotFoundComponent },

  // Nested Routes
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent ,title:'Home page'},
  { path: 'products', component: ProductlistComponent ,canActivate:[userGuard]},
  { path: 'proddet/:id', component: ProductDetailsComponent },
  { path: 'moviedetails/:mid', component: MoviedetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'join',
    component: JoinUsComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
    ],
  },

  //  wild card route
  { path: '**', component: PageNotFoundComponent },
];

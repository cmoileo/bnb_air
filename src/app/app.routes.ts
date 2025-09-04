import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Property } from './pages/property/property';
import { About } from './pages/about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'property/:id', component: Property },
  { path: 'about', component: About },
  { path: '**', component: NotFound },
];

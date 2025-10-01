import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Puntajes } from './components/puntajes/puntajes';
import { authGuard } from '../app/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login }, 
  { path: 'home', component: Home, canActivate: [authGuard] }, 
  { path: 'puntajes', component: Puntajes, canActivate: [authGuard] }, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
];

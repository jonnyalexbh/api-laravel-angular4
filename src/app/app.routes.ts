import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';

export const routes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'products',  component: LoginComponent },
  { path: '**',     component: LoginComponent },
];

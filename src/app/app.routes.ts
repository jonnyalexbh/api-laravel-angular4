import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { MainComponent } from './components/main.component';
import { LoginComponent } from './components/login.component';
import { PostComponent } from './components/post.component';

import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'main', component: MainComponent},
  { path: 'login',  component: LoginComponent, canActivate:[LoginGuard] },
  { path: 'products',  component: LoginComponent },
  { path: 'posts',  component: PostComponent },
  { path: '**',     component: LoginComponent },
];

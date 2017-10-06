import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // import FormsModule
import { HttpModule } from '@angular/http'; // import HttpModule

// routes
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// guards
import { LoginGuard } from './guards/login.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { MainComponent } from './components/main.component';
import { LoginComponent } from './components/login.component';
import { PostComponent } from './components/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

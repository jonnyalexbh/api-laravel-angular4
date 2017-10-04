import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login.component.html',
  providers: [LoginService]
})
export class LoginComponent {

  public show_service:string;
  title = 'Login app';

  constructor(
    private _loginService:LoginService) { }

    ngOnInit(){
      this.show_service = this._loginService.helloWorld();
    }

  }

import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login.component.html',
  providers: [LoginService]
})
export class LoginComponent {

  public show_service:string;
  public login: Login;
  public person:string;

  constructor(
    private _loginService:LoginService) {
      this.login = new Login('','');
    }

    ngOnInit(){
      this.show_service = this._loginService.helloWorld();
    }

    sendLogin(){
      this._loginService.getLogin(this.login).subscribe( response => {
        console.log(response);
      })
    }

  }

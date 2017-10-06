import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: '../views/login.component.html',
  providers: [LoginService]
})
export class LoginComponent {

  public show_service:string;
  public login: Login;
  public person:string;

  /**
  * constructor
  */
  constructor(
    private _router: Router,
    private _loginService:LoginService
  ) {
    this.login = new Login('','');
  }

  /**
  * ngOnInit
  */
  ngOnInit(){
    this.show_service = this._loginService.helloWorld();
  }

  /**
  * sendLogin
  */
  sendLogin(){
    this._loginService.getLogin(this.login).subscribe(
      response => {
        localStorage.setItem('id_token', response.access_token);
        this._router.navigate(['main']);
      },
      error => {
        console.log(<any>error);
      });
    }

  }

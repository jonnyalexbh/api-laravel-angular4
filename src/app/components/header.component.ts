import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: '../views/header.component.html',
  providers: [LoginService]
})
export class HeaderComponent {

  constructor(
    private _router: Router,
    private _loginService:LoginService
  ) { }

  ngOnInit() {
  }

  /**
  * logout
  */
  logout(){
    localStorage.removeItem('id_token');
    this._router.navigate(['/login']);
  }

  /**
  * isLogin
  */
  isLogin(): boolean {
    return this._loginService.isLogin();
  }

}

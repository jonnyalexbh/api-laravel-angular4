import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: '../views/main.component.html',
  providers: [LoginService]
})
export class MainComponent {

  public name:string;

  /**
  * constructor
  */
  constructor(
    private _loginService: LoginService
  ) { }

  /**
  * ngOnInit
  */
  ngOnInit() {

    if(localStorage.getItem('id_token') != null)
    this.getUser();

  }

  /**
  * getUser
  */
  getUser(){
    this._loginService.getUser().subscribe(
      result => {
        this.name = result.name;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

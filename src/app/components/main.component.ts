import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: '../views/main.component.html',
  providers: [LoginService]
})
export class MainComponent {

  public name:string;

  constructor(
    private _loginService: LoginService
  ) { }

  ngOnInit() {

    if(localStorage.getItem('id_token') != null)
    this.getUser();

  }

  getUser(){
    this._loginService.getUser().subscribe(
      result => {
        console.log(result);
        this.name = result.name;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

  constructor(
    public _http: Http
  ) { }

  helloWorld(){
    return "Hello world from service";
  }

  getLogin(data){

    const body =
    {
      username: data.user,
      password: data.pass
    };

    return this._http.post(environment.urlApi+'/login', body);
  }

  getUser(){

    var headers = new Headers({
      "Accept": "application/json",
      "Authorization": "Bearer " + localStorage.getItem('id_token'),
    });

    return this._http.get(environment.urlApi+'/user', { headers: headers }).map(res => res.json());

  }

}

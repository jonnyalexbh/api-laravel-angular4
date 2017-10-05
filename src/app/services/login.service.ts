import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

}

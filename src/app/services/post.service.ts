import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { GLOBAL } from './global';

@Injectable()
export class PostService {

  public url: string;

  constructor(
    public _http: Http
  ) {
    this.url = GLOBAL.url;
  }

  getAll(){
    return this._http.get(this.url+'/posts').map(res => res.json());
  }

}

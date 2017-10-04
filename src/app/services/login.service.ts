import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  helloWorld(){
    return "Hello world from service";
  }

}

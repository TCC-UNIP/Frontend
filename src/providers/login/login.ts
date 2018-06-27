import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'responseType': 'text'
  })
};*/


@Injectable()
export class LoginProvider {
  url: string = "http://localhost:8080";

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

 

  logar(email:string, password:string) {
    return this.http.post(this.url+"/login", {email,password}, {'responseType': 'text'})
     
  }


}



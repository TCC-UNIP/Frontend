import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';


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
  url: string = "http://192.168.2.129:8080";

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello LoginProvider Provider');
  }

 

  logar(email:string, password:string) {
    return this.http.post(this.url+"/login", {email,password}, {'responseType': 'text'})
  }

}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UtilProvider Provider');
  }

    getApiUrl(){
      return "http://localhost:8080";
    }

}

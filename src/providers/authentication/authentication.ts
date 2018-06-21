import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

    
  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');

  }

  autenticar(jobs: Observable<any>) {
    this.http.post<any>('http://localhost:8080/login',JSON.stringify({"password":"admin","email":"admin"}))
    .subscribe(resp => {
      console.log(resp.headers.get('Authorization'));
    });
  }

}

export class Job{
  id : number;
  title: String;
  salario: 62205;
  categoria: String;
  proprietarioNome: String;
  localizacao: String;
}
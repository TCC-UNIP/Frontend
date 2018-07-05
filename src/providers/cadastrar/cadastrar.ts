import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CadastrarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarProvider {
  url: string = "http://localhost:8080";
  constructor(public http: HttpClient) {
    console.log('Hello CadastrarProvider Provider');
  }

 
    Cadastrar(user: User) {
      return this.http.put(this.url+"/user", user);  
    }
}

export interface User{
  userToken: string;
  datanascimento: Date;
  nome: string;
  password: string;
  email: string;
  }
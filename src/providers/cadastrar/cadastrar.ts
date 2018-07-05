import { UtilProvider } from './../util/util';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CadastrarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarProvider {

  constructor(public http: HttpClient, public utilidades: UtilProvider) {
    console.log('Hello CadastrarProvider Provider');
  }

 
    Cadastrar(user: User) {
      return this.http.put(this.utilidades.getApiUrl()+"/user", user);  
    }
}

export class User{
  userToken: string;
  datanascimento: Date;
  nome: string;
  password: string;
  email: string;
  }
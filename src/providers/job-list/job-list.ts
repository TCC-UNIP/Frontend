import { UtilProvider } from './../util/util';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JobListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JobListProvider {
  jobs : Job;
  constructor(public http: HttpClient, public utilidade: UtilProvider) {
    console.log('Hello AuthenticationProvider Provider');
  }

  getJobs() {
    return this.http.get<Array<Job>>(this.utilidade.getApiUrl()+"/job");  
  }
}

export interface Job{
  id: number,
  titulo: string,
  salario: number,
  categoria: string,
  proprietarioNome: string,
  localizacao: string,
  descricao: string
}

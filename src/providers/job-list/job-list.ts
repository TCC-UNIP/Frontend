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
  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

  getJobs() {
    return this.http.get<Array<Job>>("http://localhost:8080/job");  
  }
}

export interface Job{
  id: number,
  titulo: string,
  salario: number,
  categoria: string,
  proprietarioNome: string,
  localizacao: string
}

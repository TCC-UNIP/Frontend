import { Job } from './../job-list/job-list';
import { UsuarioToken } from './../../pages/login/login';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CandidatarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CandidatarProvider {
  url = "http://localhost:8080" ;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello CandidatarProvider Provider');
  }

  candidatar(job: Job){
    this.storage.get('usuario').then((data:UsuarioToken)=>{
      return this.http.post(this.url+"/protected/job/candidatar/"+data.email+'/'+job.id, {'Authorization': data.token }).subscribe();
    }).catch(()=>
  {

  });
  }



}

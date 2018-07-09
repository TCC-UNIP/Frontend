import { AlertController } from 'ionic-angular';
import { Job } from './../job-list/job-list';
import { UsuarioToken } from './../../pages/login/login';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from '../util/util';

/*
  Generated class for the CandidatarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/




@Injectable()
export class CandidatarProvider {

  constructor(public http: HttpClient, private storage: Storage, public utilidades: UtilProvider, public alertCtrl: AlertController) {
    console.log('Hello CandidatarProvider Provider');
  }
  
  candidatar(job: Job){
    this.storage.get('usuario').then((data:UsuarioToken)=>{
      return this.http.post(this.utilidades.getApiUrl()+"/protected/job/candidatar/"+data.email+'/'+job.id,{},{
        headers: new HttpHeaders().set('Authorization', data.token)}).subscribe((data: any)=>{
          let alert = this.alertCtrl.create({
            title: 'Candidatura Realizada',
            subTitle: 'Candidatura realizada com sucesso, Caso você seja selecionado o proprietario da vaga entrara em contato, aguarde e Boa Sorte',
            buttons: ['OK']
          });
          alert.present();

        },
         error =>{
          let alert = this.alertCtrl.create({
            title: 'Candidatura não realizada',
            subTitle: 'É necessario estar logado para se candidatar, Não é possivel se candidatar a propria vaga nem se candidatar duas vezes a mesma vaga. Caso sua ocorrencia não se encaixe nas situações descritas entre em contato com o suporte',
            buttons: ['OK']
          });
          alert.present();

        });
    }).catch(()=>
  {   

    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi possivel se candidatar',
      buttons: ['OK']
    });
    alert.present();
    
  });
  }
}

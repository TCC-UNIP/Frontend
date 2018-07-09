import { AlertController } from 'ionic-angular';
import { UsuarioToken } from './../../pages/login/login';
import { Storage } from '@ionic/storage';
import { Job } from './../job-list/job-list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from '../util/util';

/*
  Generated class for the CriarServicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CriarServicoProvider {
  titulo: string;
  salario: number;
  descricao: string;

  constructor(public http: HttpClient, private storage: Storage, private utilidades: UtilProvider, private alertCtrl: AlertController) {
    console.log('Hello CriarServicoProvider Provider');
  }

  criarServico(job : Job){
    this.storage.get('usuario').then((data:UsuarioToken)=>{
      this.http.post(this.utilidades.getApiUrl()+"protected/job/save?email="+data.email,job,{
        headers: new HttpHeaders().set('Authorization', data.token)}).subscribe((data: any)=>{
          let alert = this.alertCtrl.create({
            title: 'Oferta Criada',
            subTitle: 'Oferta Criada Com Sucesso',
            buttons: ['OK']
          });
          alert.present();

        },
         error =>{
          let alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possivel criar oferta, tente novamente',
            buttons: ['OK']
          });
          alert.present();
        });
    }).catch(()=>
  {   
    let alert = this.alertCtrl.create({
      title: 'Erro',
      subTitle: 'Não foi encontrar usuario no banco, tente se relogar',
      buttons: ['OK']
    });
    alert.present();
    
  });
  }

}

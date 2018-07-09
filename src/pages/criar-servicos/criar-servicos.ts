import { Storage } from '@ionic/storage';
import { CriarServicoProvider } from './../../providers/criar-servico/criar-servico';
import { Job } from './../../providers/job-list/job-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CriarServicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-servicos',
  templateUrl: 'criar-servicos.html',
})
export class CriarServicosPage {

  titulo: string;
  descricao: string;
  salario: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public criarServicoProvider: CriarServicoProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarServicosPage');
  }

  criarServico(){
    let job = new Job; 
    job.descricao = this.descricao;
    job.titulo = this.titulo;
    job.salario = this.salario;
    this.criarServicoProvider.criarServico(job);
  }

}

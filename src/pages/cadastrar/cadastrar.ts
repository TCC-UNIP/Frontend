import { LoginPage } from './../login/login';
import { CadastrarProvider, User } from './../../providers/cadastrar/cadastrar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';

/**
 * Generated class for the CadastrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  usuario: User;

  private nome:string;
  private email:string;
  private password:string;
  private datanascimento:Date;


  constructor(public navCtrl: NavController, public navParams: NavParams, public cadastrarServico: CadastrarProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }
 
  cadastrar(){

    this.usuario = {
    datanascimento: this.datanascimento,
    nome: this.nome,
    password: this.password,
    email: this.email
    }
      this.cadastrarServico.Cadastrar(this.usuario).subscribe();
      this.navCtrl.push(LoginPage);
  }

}


;
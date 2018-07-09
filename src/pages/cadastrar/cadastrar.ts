import { Storage } from '@ionic/storage';
import { LoginPage } from './../login/login';
import { CadastrarProvider, User } from './../../providers/cadastrar/cadastrar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  

  private nome:string;
  private email:string;
  private password:string;
  private datanascimento:Date;


  constructor(public navCtrl: NavController, public navParams: NavParams, public cadastrarServico: CadastrarProvider, private storage: Storage, public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }
 
  cadastrar(){

    let usuario = new User;
    usuario.userToken =null,
    usuario.datanascimento= this.datanascimento,
    usuario.nome= this.nome,
    usuario.password= this.password,
    usuario.email= this.email
    
    this.cadastrarServico.Cadastrar(usuario).subscribe((data: any)=> {
      this.storage.clear();
      this.storage.set('usuario', usuario);
      this.navCtrl.push(LoginPage);
    }, error =>{
      let alert = this.alertCtrl.create({
        title: 'Erro',
        subTitle: 'Falha ao se candidatar, tente novamente',
        buttons: ['OK']
      });
      alert.present();
    });
    
  }

}
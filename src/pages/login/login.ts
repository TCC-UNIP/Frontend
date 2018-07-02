import { HomePage } from './../home/home';
import { UsuarioToken } from './login';
import { Storage } from '@ionic/storage';
import { CadastrarPage } from './../cadastrar/cadastrar';
import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  private email: string;
  private password: string;
  private erroMensage:string;
  

  usuario : UsuarioToken = {
        token : null,
        email :this.email,
        password : this.password  
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginServicos: LoginProvider,  private storage: Storage) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');   
    this.loginAutomatio();
  }

  logar(){
    if(this.email && this.password != null){   


    this.loginServicos.logar(this.email,this.password).subscribe(
      (data: string) =>{
        this.usuario.email = this.email;
        this.usuario.password = this.password;
        this.usuario.token = data;
        this.storage.clear;
        this.storage.set('usuario', this.usuario);
        this.navCtrl.push(HomePage);
      });

  }else if (this.email == null) {
    this.erroMensage="Utilize seu Email";
  }else if(this.password == null) {
    this.erroMensage="Utilize sua senha ";
  }
  }

  loginAutomatio(){
 
    this.storage.get('usuario')    
    .then((data : UsuarioToken) => {
      this.usuario = data;
      this.loginServicos.logar(data.email, data.password).subscribe(
        (data: string) =>{
          this.usuario.token = data;
          this.storage.set('usuario', this.usuario);
          this.navCtrl.push(HomePage);
        });
    })
    .catch(() => {

    });
}



  cadastrar() {
    this.navCtrl.push(CadastrarPage);
  }
}

export interface UsuarioToken {
  token: string;
  email: string;
  password: string;
}
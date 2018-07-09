import { HomePage } from './../home/home';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginServicos: LoginProvider,  private storage: Storage) {
    this.loginAutomatio();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');   
    
  }

  logar(){
    let usuario = new UsuarioToken;
    if(this.email && this.password != null){   
    this.loginServicos.logar(this.email, this.password).subscribe(
      (data: string) =>{
        usuario.email = this.email;
        usuario.password = this.password;
        usuario.token = data;
        this.storage.clear();
        this.storage.set('usuario', usuario);
        this.navCtrl.push(HomePage);
      },error => this.erroMensage = "Login falhou" );

  }else if (this.email == null) {
    this.erroMensage="Utilize seu Email";
  }else if(this.password == null) {
    this.erroMensage="Utilize sua senha ";
  }
  }

  loginAutomatio(){
    let usuario = new UsuarioToken;
    this.storage.get('usuario')    
    .then((data : UsuarioToken) => {
      usuario = data;
      this.loginServicos.logar(data.email, data.password).subscribe(
        (data: string) =>{
          usuario.token = data;
          this.storage.set('usuario', usuario);
          this.navCtrl.push(HomePage);
        });
    })
    .catch(() => {
        
    });
}

logout(){
  this.storage.clear();
  this.navCtrl.push(LoginPage);
}

cadastrar() {
    this.navCtrl.push(CadastrarPage);
  }
}

export class UsuarioToken {
  token: string;
  email: string;
  password: string;
}
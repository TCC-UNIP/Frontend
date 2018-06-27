import { CadastrarPage } from './../cadastrar/cadastrar';
import { HomePage } from './../home/home';
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
  public token:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginServicos: LoginProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');   
    this.isLog(this.token);
  }

  logar(){
    if(this.email && this.password != null){
    this.loginServicos.logar(this.email,this.password).subscribe(
      (data: string) =>{
        this.token = data;
        this.isLog(this.token);
      });
  }else if (this.email == null) {
    this.erroMensage="Utilize seu Email";
  }else if(this.password == null) {
    this.erroMensage="Utilize sua senha ";
  }
  }

  isLog(token:string){
    if(token != null){
      this.navCtrl.push(HomePage);
    }
  }

  cadastrar() {
    this.navCtrl.push(CadastrarPage);
  }
}

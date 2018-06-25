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
    this.loginServicos.logar(this.email,this.password).subscribe(
      (data: string) =>{
        this.token = data;
        this.isLog(this.token);
      });
  }

  isLog(token:string){
    if(token != null){
      this.navCtrl.push(HomePage);
    }
  }
}

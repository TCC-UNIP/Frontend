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
  token: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginServicos: LoginProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.logar()
    
  }

  logar(){
    this.loginServicos.logar().subscribe
    ((data: string)=>{
      this.token = data;
    });
  }

}

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  jobs: Observable<any>;
  token: String;

  constructor(public navCtrl: NavController, public auth: AuthenticationProvider) {
    this.auth.autenticar(this.jobs);
    
  }
}

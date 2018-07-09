import { HomePage } from './../home/home';
import { CriarServicosPage } from './../criar-servicos/criar-servicos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  login = LoginPage;
  criarServicos = CriarServicosPage;
  servicosList = HomePage;

}

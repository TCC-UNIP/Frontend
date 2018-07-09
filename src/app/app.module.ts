import { CriarServicosPageModule } from './../pages/criar-servicos/criar-servicos.module';
import { CriarServicosPage } from './../pages/criar-servicos/criar-servicos';
import { TabsPage } from './../pages/tabs/tabs';
import { HomePage } from './../pages/home/home';
import { CadastrarPageModule } from './../pages/cadastrar/cadastrar.module';
import { LoginPageModule } from './../pages/login/login.module';
import { CandidatarProvider } from './../providers/candidatar/candidatar';
import { CadastrarPage } from './../pages/cadastrar/cadastrar';
import { LoginPage } from './../pages/login/login';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginProvider } from '../providers/login/login';
import { JobListProvider } from '../providers/job-list/job-list';
import { CadastrarProvider } from '../providers/cadastrar/cadastrar';
import { IonicStorageModule } from '@ionic/storage';
import { UtilProvider } from '../providers/util/util';
import { CriarServicoProvider } from '../providers/criar-servico/criar-servico';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LoginPageModule,
    CadastrarPageModule,
    CriarServicosPageModule

  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    HomePage,
    CriarServicosPage,
    LoginPage,
    CadastrarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    JobListProvider,
    CadastrarProvider,
    CandidatarProvider,
    UtilProvider,
    CriarServicoProvider
  ]
})
export class AppModule {}

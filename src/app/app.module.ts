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


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LoginPageModule,
    CadastrarPageModule
  ],
  bootstrap: [IonicApp], 
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    JobListProvider,
    CadastrarProvider,
    CandidatarProvider
  ]
})
export class AppModule {}

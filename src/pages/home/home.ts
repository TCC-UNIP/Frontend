import {  HttpErrorResponse } from '@angular/common/http';
import { AuthenticationProvider, Job } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrayJobs: Array<Job>;

  constructor(public navCtrl: NavController, public auth: AuthenticationProvider) {
    this.showJobs();
   
  }

  showJobs(){
     this.auth.getJobs().subscribe(
      (data: Array<Job>) => {
        this.arrayJobs = data;
    },
      (err : HttpErrorResponse) => {
        console.log(err.type);
      }
  
  );
  
  }


}

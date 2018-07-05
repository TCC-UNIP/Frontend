import { CandidatarProvider } from './../../providers/candidatar/candidatar';
import { JobListProvider, Job } from './../../providers/job-list/job-list';
import {  HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrayJobs: Array<Job>;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public joblist: JobListProvider, private candidatarService: CandidatarProvider) {
    this.showJobs();
  }

  showJobs(){
     this.joblist.getJobs().subscribe(
      (data: Array<Job>) => {
        this.arrayJobs = data;
    },
      (err : HttpErrorResponse) => {
        console.log(err.type);
      }
  
  );}

  candidatar(jobitem: Job){
    
    this.candidatarService.candidatar(jobitem);
  }

  showConfirm(jobitem: Job) {
    const confirm = this.alertCtrl.create({
      title: 'Candidatar',
      message: 'Você realmente deseja se candidatar',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.candidatar(jobitem);
          }
        }
      ]
    });
    confirm.present();
  }


}

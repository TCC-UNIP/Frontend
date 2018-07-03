import { CandidatarProvider } from './../../providers/candidatar/candidatar';
import { JobListProvider, Job } from './../../providers/job-list/job-list';
import {  HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arrayJobs: Array<Job>;

  constructor(public navCtrl: NavController, public joblist: JobListProvider, private candidatarService: CandidatarProvider) {
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

}

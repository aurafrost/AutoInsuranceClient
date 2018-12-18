import { Component, OnInit } from '@angular/core';
import { Report } from '../model/Report';
import { Claim } from '../model/Claim';
import {UserService} from '../service/user/user.service';
import {ReportService} from '../service/report/report.service';
import {ClaimService} from '../service/claim/claim.service';
import { User } from '../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'inspect-officer-page',
  templateUrl: './inspect-officer-page.component.html',
  styleUrls: ['./inspect-officer-page.component.css']
})
export class InspectOfficerPageComponent implements OnInit {
  reports:any;
  report:Report;
  reportTable:HTMLElement;
  reportForm:HTMLElement;
  claimId:number;

  //need service
  constructor(
    private claimService: ClaimService,
    private userService: UserService,
    private reportService: ReportService,
    private $router: Router
  ) { }

  ngOnInit() {
    this.reportService.getReports().subscribe(data=>{this.reports=data;});
  }

  handleLogout() {
    sessionStorage.removeItem('user');
    return this.$router.navigate(['cover']);
  }

  showForm(claimId) {
    this.claimId = claimId; // for use in submitReport()
    this.reportTable = document.getElementById('reportTable') as HTMLElement;
    this.reportTable.style.display = 'none';
    this.reportForm = document.getElementById('reportForm') as HTMLElement;
    this.reportForm.style.display = 'block';
  }

  submitReport(estimate,evaluation){
    //send report to database
    //this.reportService.postReport(report); //missing report evaluation column. Also not sure how to send estimate. Can't add this line yet.
    this.reportTable=document.getElementById('reportTable') as HTMLElement;
    this.reportTable.style.display='block';
    this.reportForm=document.getElementById('reportForm') as HTMLElement;
    this.reportForm.style.display='none';
  }
}

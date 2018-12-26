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
  reportId:number;
  estimate = '';
  evaluation = '';

  //need service
  constructor(
    private claimService: ClaimService,
    private userService: UserService,
    private reportService: ReportService,
    private $router: Router
  ) { }

  ngOnInit() {
    const email = sessionStorage.getItem('email');
    this.reportService.getReportsByInspectOfficer(email)
      .subscribe(
        data => {
          this.reports = data;
          console.log(this.reports);
        });
  }

  handleLogout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('email');
    return this.$router.navigate(['cover']);
  }

  showForm(report) {
    this.report = report; // for use in submitReport()
    this.reportTable = document.getElementById('reportTable') as HTMLElement;
    this.reportTable.style.display = 'none';
    this.reportForm = document.getElementById('reportForm') as HTMLElement;
    this.reportForm.style.display = 'block';
  }

  submitReport() {
    console.log(this.estimate);
    console.log(this.evaluation);
    // send report to database
    this.report.estimate = this.estimate;
    this.report.evaluation = this.evaluation;

    this.reportService.updateReport(this.report.reportId, this.report)
      .subscribe(data => {
        this.reportTable = document.getElementById('reportTable') as HTMLElement;
        this.reportTable.style.display = 'block';
        this.reportForm = document.getElementById('reportForm') as HTMLElement;
        this.reportForm.style.display = 'none';
        alert('Report updated!');
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Claim } from '../model/Claim';

import {UserService} from '../service/user/user.service';
import {ReportService} from '../service/report/report.service';
import {ClaimService} from '../service/claim/claim.service';
import { User } from '../model/User';
import {Router, RouterModule} from '@angular/router';
import { Report } from '../model/Report';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UserDialogComponent} from '../admin-page/dialog/user-dialog/user-dialog.component';
import {ReportDialogComponent} from './report-dialog/report-dialog.component';

@Component({
  selector: 'claim-officer-page',
  templateUrl: './claim-officer-page.component.html',
  styleUrls: ['./claim-officer-page.component.css']
})
export class ClaimOfficerPageComponent implements OnInit {
  reportDialog: MatDialogRef<ReportDialogComponent>;
  claims: Claim[];
  c: Claim = new Claim();
  users: any;
  u: User = new User();
  claimTable: HTMLElement;
  inspectorTable: HTMLElement;
  claim: Claim;
  report: any;

  constructor(
    private dialog: MatDialog,
    private claimService: ClaimService,
    private userService: UserService,
    private reportService: ReportService,
    private $router: Router
    ) { }

  ngOnInit() {
    this.claimService.getClaims().subscribe(data => {this.claims = data; });
    this.userService.getUsersByType('inspect_officers')
          .subscribe(data => {
            this.users = data;
          });
  }

  openDialog(c) {
    this.reportService.getReportById(c.claimId)
      .subscribe(data => {
        this.reportDialog = this.dialog.open(ReportDialogComponent, {
          data: {
            report: data
          }
        });
        console.log(this.report);
      });
  }


  handleLogout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('email');
    return this.$router.navigate(['cover']);
  }

  viewReport() {
  }

  showInspectors(claim) {
    console.log(claim);
    this.claim = claim; // stored to be used in assignInspector
    this.userService.getUserByClaim(claim)
      .subscribe(data => {
        this.report = new Report();
        this.report.reportId = this.claim.claimId;
        this.report.claimOfficer = sessionStorage.getItem('email');
        // this.report.estimate = 0.00;
        // this.report.evaluation = '';
        this.report.insuredEmail = data.email;
        this.report.insuredPhone = data.phone;
        console.log(this.report);
      });
    this.claimTable = document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display = 'none';
    this.inspectorTable = document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display = 'block';
  }

  assignInspector(officer) {
    // create default report object
    this.report.inspectOfficer = officer.email;
    console.log(this.report);
    // send to DB
    this.reportService.postReport(this.report)
      .subscribe(data => {
        this.report = data;
      }); // for some reason tries to set null values in claim table?

    this.claimTable = document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display = 'block';
    this.inspectorTable = document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display = 'none';
  }
  approve(claim) {
    this.claim = claim;
    this.claim.status = 'Approved';
    this.claimService.updateClaim(claim, this.claim.claimId)
      .subscribe(data => {
        this.claim = data;
      });
  }
  decline(claim) {
    this.claim = claim;
    this.claim.status = 'Declined';
    this.claimService.updateClaim(claim, this.claim.claimId)
      .subscribe(data => {
        this.claim = data;
      });
  }
  hider() {
    this.claimTable = document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display = 'block';
    this.inspectorTable = document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display = 'none';
  }
}

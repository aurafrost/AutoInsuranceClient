import { Component, OnInit } from '@angular/core';
import { Report } from '../model/Report';
import {Router} from '@angular/router';

@Component({
  selector: 'inspect-officer-page',
  templateUrl: './inspect-officer-page.component.html',
  styleUrls: ['./inspect-officer-page.component.css']
})
export class InspectOfficerPageComponent implements OnInit {
  reports: Report[];
  reportTable: HTMLElement;
  reportForm: HTMLElement;
  claimId: number;

  // need service
  constructor(
    private $router: Router
    ) { }


  ngOnInit() {
    // this.service.getReports().subscribe(data=>{this.reports=data;});
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
  submitReport() {
    // send report to database
    this.reportTable = document.getElementById('reportTable') as HTMLElement;
    this.reportTable.style.display = 'block';
    this.reportForm = document.getElementById('reportForm') as HTMLElement;
    this.reportForm.style.display = 'none';
  }
}

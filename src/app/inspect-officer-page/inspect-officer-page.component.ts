import { Component, OnInit } from '@angular/core';
import { Report } from '../model/Report';

@Component({
  selector: 'inspect-officer-page',
  templateUrl: './inspect-officer-page.component.html',
  styleUrls: ['./inspect-officer-page.component.css']
})
export class InspectOfficerPageComponent implements OnInit {
  reports:Report[];
  reportTable:HTMLElement;
  reportForm:HTMLElement;

  //need service
  constructor() { }

  ngOnInit() {
    //this.service.getReports().subscribe(data=>{this.reports=data;});
  }

  showForm(claimId){
    this.reportTable=document.getElementById('reportTable') as HTMLElement;
    this.reportTable.style.display='none';
    this.reportForm=document.getElementById('reportForm') as HTMLElement;
    this.reportForm.style.display='block';
  }
}

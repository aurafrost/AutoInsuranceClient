import { Component, OnInit } from '@angular/core';
import { Claim } from '../model/Claim';

@Component({
  selector: 'claim-officer-page',
  templateUrl: './claim-officer-page.component.html',
  styleUrls: ['./claim-officer-page.component.css']
})
export class ClaimOfficerPageComponent implements OnInit {
  claims:Claim[];
  c:Claim=new Claim();
  claimTable:HTMLElement;
  inspectorTable:HTMLElement;
  claimOfficer:String;

  //need to add a service parameter
  constructor() { }

  ngOnInit() {
    //this.service.getClaims().subscribe(data=>{this.claims=data;});
  }
  showInspectors(claimId){
    this.claimTable=document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display='none';
    this.inspectorTable=document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display='block';
  }
  assignInspector(lname){
    this.claimOfficer=lname;
    //TODO send to database
  }
  approve(claimId){

  }
  decline(claimId){

  }
}

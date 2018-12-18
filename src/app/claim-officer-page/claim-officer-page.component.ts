import { Component, OnInit } from '@angular/core';
import { Claim } from '../model/Claim';
import { ClaimService } from '../service/claim/claim.service';
import {Router, RouterModule} from '@angular/router';

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
  claim:Claim;

  constructor(
    private $router: Router,
    private service: ClaimService) { }

  ngOnInit() {
    this.service.getClaims().subscribe(data=>{this.claims=data;});
  }

  handleLogout() {
    sessionStorage.removeItem('user');
    return this.$router.navigate(['cover']);
  }

  showInspectors(claim){
    this.claim=claim; //stored to be used in assignInspector
    this.claimTable=document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display='none';
    this.inspectorTable=document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display='block';
  }
  assignInspector(lname){
    //issue below. claimOfficer is in the report table. Need to discuss how to handle.
    //this.claim.claimOfficer=lname;
    
    //TODO send to database. Not sure this works
    this.service.updateClaimByInspector(this.claim,this.claim.claimId);
    this.claimTable=document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display='block';
    this.inspectorTable=document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display='hide';
  }
  approve(claim){
    this.claim=claim;
    this.claim.status="Approved";
    this.service.updateClaim(claim,this.claim.claimId);
  }
  decline(claim){
    this.claim=claim;
    this.claim.status="Declined";
    this.service.updateClaim(claim,this.claim.claimId);
  }
}

import { Component, OnInit } from '@angular/core';
import { Claim } from '../model/Claim';

import {UserService} from '../service/user/user.service';
import {ReportService} from '../service/report/report.service';
import {ClaimService} from '../service/claim/claim.service';
import { User } from '../model/User';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'claim-officer-page',
  templateUrl: './claim-officer-page.component.html',
  styleUrls: ['./claim-officer-page.component.css']
})
export class ClaimOfficerPageComponent implements OnInit {
  claims:Claim[];
  c:Claim=new Claim();
  users:any;
  u:User=new User();
  claimTable:HTMLElement;
  inspectorTable:HTMLElement;
  claim:Claim;

  constructor(
    private claimService: ClaimService,
    private userService: UserService
    private $router: Router,
    ) { }

  ngOnInit() {
    this.claimService.getClaims().subscribe(data=>{this.claims=data;});
    this.userService.getUsersByType('inspect_officers')
          .subscribe(data => {
            this.users = data;
            //console.log(this.users);
          });
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
    //issue below. inspectOfficer is in the report table. Need to discuss how to handle.
    //this.claim.inspectOfficer=lname;
    
    //TODO send to database. Not sure this works
    //this.claimService.updateClaimByInspector(this.claim,this.claim.claimId);
    this.claimTable=document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display='block';
    this.inspectorTable=document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display='none';
  }
  approve(claim){
    this.claim=claim;
    this.claim.status="Approved";
    this.claimService.updateClaim(claim,this.claim.claimId);
  }
  decline(claim){
    this.claim=claim;
    this.claim.status="Declined";
    this.claimService.updateClaim(claim,this.claim.claimId);
  }
  hider(){
    this.claimTable=document.getElementById('claimTable') as HTMLElement;
    this.claimTable.style.display='block';
    this.inspectorTable=document.getElementById('inspectorTable') as HTMLElement;
    this.inspectorTable.style.display='none';
  }
}

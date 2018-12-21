import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UserDialogComponent} from '../../admin-page/dialog/user-dialog/user-dialog.component';
import {DetailsDialogComponent} from './details-dialog/details-dialog.component';
import {ClaimService} from '../../service/claim/claim.service';
import {Claim} from '../../model/Claim';

@Component({
  selector: 'claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {
  detailsDialogRef: MatDialogRef<DetailsDialogComponent>;
  private list: any = [];
  details = false;
  current_id;

  constructor(
    private httpClaim: ClaimService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getClaims();
    console.log(window.location);
    console.log(window.history);
  }

  getClaims() {
    this.httpClaim.getClaims()
      .subscribe(data => {
        this.list = data;
      });
  }

  openDialog(claim) {
    console.log(claim);
    this.detailsDialogRef = this.dialog.open(DetailsDialogComponent, {
      data: {
        claim: claim
      }
    });
  }
}

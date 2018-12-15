import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'claim-officer-table',
  templateUrl: './claim-officer-table.component.html',
  styleUrls: ['./claim-officer-table.component.css']
})
export class ClaimOfficerTableComponent implements OnInit {
  @Input() claimOfficers;

  constructor() { }

  ngOnInit() {
  }

}

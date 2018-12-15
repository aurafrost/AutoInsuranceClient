import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.css']
})
export class ClaimTableComponent implements OnInit {
  private claims;

  constructor() { }

  ngOnInit() {
  }

}

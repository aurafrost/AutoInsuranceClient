import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.css']
})
export class ClaimTableComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}

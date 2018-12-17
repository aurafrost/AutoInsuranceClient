import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}

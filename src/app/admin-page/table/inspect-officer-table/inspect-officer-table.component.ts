import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'inspect-officer-table',
  templateUrl: './inspect-officer-table.component.html',
  styleUrls: ['./inspect-officer-table.component.css']
})
export class InspectOfficerTableComponent implements OnInit {
  @Input() list;
  constructor() { }

  ngOnInit() {
  }

}

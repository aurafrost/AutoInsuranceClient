import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit() {
  }

}

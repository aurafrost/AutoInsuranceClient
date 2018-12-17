import {Component, Input, OnInit} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {BASE_URL} from '../../../../environments/environment';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.css']
})
export class ClaimTableComponent implements OnInit {
  @Input() list;

  constructor(
  ) { }

  ngOnInit() {
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  @Input() list;

  constructor(
    private userHttp: UserService
  ) {
  }

  ngOnInit() {
  }

  handleAction = (user) => {
    this.userHttp.updateUserStatus(user)
      .subscribe(data => {
        console.log(data);
      });
  }
}

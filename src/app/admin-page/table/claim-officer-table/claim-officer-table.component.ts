import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'claim-officer-table',
  templateUrl: './claim-officer-table.component.html',
  styleUrls: ['./claim-officer-table.component.css']
})
export class ClaimOfficerTableComponent implements OnInit {
  @Input() list;

  constructor(
    private userHttp: UserService
  ) { }

  ngOnInit() {
  }

  handleAction = (user) => {
    this.userHttp.updateUserStatus(user)
      .subscribe(data => {
        console.log(data);
      });
  }
}

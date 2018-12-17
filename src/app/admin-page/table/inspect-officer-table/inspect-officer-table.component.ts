import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'inspect-officer-table',
  templateUrl: './inspect-officer-table.component.html',
  styleUrls: ['./inspect-officer-table.component.css']
})
export class InspectOfficerTableComponent implements OnInit {
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

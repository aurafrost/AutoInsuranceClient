import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user/user.service';
import {ReportService} from '../../../service/report/report.service';
import {ClaimService} from '../../../service/claim/claim.service';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {
  @Output() _type = new EventEmitter();
  @Output() _list = new EventEmitter();

  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(Breakpoints.Handset);

  constructor(
    private $router: Router,
    private userHttp: UserService,
    private reportHttp: ReportService,
    private claimHttp: ClaimService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
  }

  handleLogout() {
    sessionStorage.removeItem('user');
    return this.$router.navigate(['cover']);
  }

  handleChange = (e) => {
    this._type.emit(e.target.name);
    switch ( e.target.name) {
      case 'Customers':
        return this.userHttp.getUsersByType('customers')
          .subscribe(data => {
            this._list.emit(data);
            console.log(this._list);
          });
      case 'Claim Officers':
        return this.userHttp.getUsersByType('claim_officers')
          .subscribe(data => {
            this._list.emit(data);
            console.log(this._list);
          });
      case 'Inspect Officers':
        return this.userHttp.getUsersByType('inspect_officers')
          .subscribe(data => {
            this._list.emit(data);
            console.log(this._list);
          });
      // case 'Reports':
      //   return this.reportHttp.getReports()
      //     .subscribe(data => {
      //       this._list = data;
      //       console.log(this._list);
      //     });
      // case 'Claims':
      //   return this.claimHttp.getClaims()
      //     .subscribe(data => {
      //       this._list = data;
      //       console.log(this._list);
      //     });
    }
  }
}

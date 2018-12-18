import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ADMIN_SECRET} from '../../environments/environment';

@Component({
  selector: 'cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})

export class CoverPageComponent implements OnInit {
  private type: string;
  private user: any;
  private adminSecret = '';

  userCategories: any[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Customer', viewValue: 'Customer'},
    {value: 'ClaimOfficer', viewValue: 'Claim Officer'},
    {value: 'InspectOfficer', viewValue: 'Inspect Officer'}
  ];

  constructor(private $router: Router) {
  }

  ngOnInit() {
    const user = sessionStorage.getItem('user');
    switch (user) {
      case 'admin':
        return this.$router.navigate(['admin']);
      case 'customer':
        return this.$router.navigate(['customer']);
      case 'claim_officer':
        return this.$router.navigate(['claim_officer']);
      case 'inspect_officer':
        return this.$router.navigate(['inspect_officer']);
      default:
        return this.$router.navigate(['cover']);
    }
  }

  handleAdminSubmit() {
    if (this.adminSecret === ADMIN_SECRET) {
      sessionStorage.setItem('user', 'admin');
      return this.$router.navigate(['admin']);
    }
  }

  handleCustomerSubmit() {
   console.log('Customer Submit');
    sessionStorage.setItem('user', 'customer');
    return this.$router.navigate(['customer']);
  }

  handleClaimOfficerSubmit() {
    console.log('Claim Officer Submit');
    sessionStorage.setItem('user', 'claim_officer');
    return this.$router.navigate(['claim_officer']);
  }

  handleInspectOfficerSubmit() {
    console.log('Inspect Officer Submit');
    sessionStorage.setItem('user', 'inspect_officer');
    return this.$router.navigate(['inspect_officer']);
  }

  handleSelectChange() {
    switch (this.type) {
      case 'Admin':
        return this.user = 'admin';
      case 'Customer':
        this.user = 'customer';
        return this.handleCustomerSubmit();
      case 'ClaimOfficer':
        this.user = 'claim_officer';
        return this.handleClaimOfficerSubmit();
      case 'InspectOfficer':
        this.user = 'inspect_officer';
        return this.handleInspectOfficerSubmit();
      default:
        this.user = null;
        return this.$router.navigate(['cover']);
    }
  }
}

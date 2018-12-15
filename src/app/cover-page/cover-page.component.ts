import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})

export class CoverPageComponent implements OnInit {
  private type: string;

  userCategories: any[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Customer', viewValue: 'Customer'},
    {value: 'ClaimOfficer', viewValue: 'Claim Officer'},
    {value: 'InspectOfficer', viewValue: 'Inspect Officer'}
  ];

  constructor(private $router: Router) { }

  ngOnInit() {
  }

  handleSelectChange() {
    switch (this.type) {
      case 'Admin':
        sessionStorage.setItem('user', 'admin');
        return this.$router.navigate(['admin']);
      case 'Customer':
        sessionStorage.setItem('user', 'customer');
        return this.$router.navigate(['customer']);
      case 'ClaimOfficer':
        sessionStorage.setItem('user', 'claim_officer');
        return this.$router.navigate(['claim_officer']);
      case 'InspectOfficer':
        sessionStorage.setItem('user', 'inspect_officer');
        return this.$router.navigate(['inspect_officer']);
      default:
        sessionStorage.setItem('user', '');
        return this.$router.navigate(['cover']);
    }
  }
}

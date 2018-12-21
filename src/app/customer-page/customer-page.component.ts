import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  constructor(
    private $router: Router
  ) { }

  ngOnInit() {
  }

  handleLogout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('email');
    return this.$router.navigate(['cover']);
  }
}

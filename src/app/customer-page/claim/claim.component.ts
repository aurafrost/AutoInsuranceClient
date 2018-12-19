import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(
    private $router: Router
  ) { }

  ngOnInit() {
  }

  handleBack() {
    this.$router.navigate(['/customer/list']);
  }
}

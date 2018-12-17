import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})
export class ClaimListComponent implements OnInit {
  details = false;
  current_id;
  sample_list = [
    {
      'claim_id': 'sample1',
      'car_make': 'honda',
      'car_model' : 'accord',
      'date_of_incident':'12/17/2018',
      'description': 'Rear-ended',
      'estimate_cost':3000
    },
    {
      'claim_id': 'sample2',
      'car_make': 'toyota',
      'car_model' : 'crolla',
      'date_of_incident':'12/17/2017',
      'description': 'Rear-ended',
      'estimate_cost':3400
    },
    {
      'claim_id': 'sample3',
      'car_make': 'BMW',
      'car_model' : 'FANCY',
      'date_of_incident':'12/17/2018',
      'description': 'Rear-ended',
      'estimate_cost':999000
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  show_detail(id: string) {
    this.details = true;
    this.current_id = id;
    console.log('clicked on: ' + this.current_id);
    console.log('class id is: ' + id);
  }
}

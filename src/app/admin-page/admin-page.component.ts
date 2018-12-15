import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  private title: string;
  constructor() { }

  ngOnInit() {
  }

  handleTitleChange = (e) => {
    this.title = e.target.name;
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const user = sessionStorage.getItem('user');
    console.log(user);
    switch (user) {
      case 'admin':
        this.router.navigate(['admin']);
        break;
      case 'customer':
        this.router.navigate(['customer']);
        break;
      case 'claim_cfficer':
        this.router.navigate(['claim_officer']);
        break;
      case 'inspect_officer':
        this.router.navigate(['inspect_officer']);
        break;
      default:
        this.router.navigate(['cover']);
        break;
    }
  }
}

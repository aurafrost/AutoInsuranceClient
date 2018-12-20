import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ADMIN_SECRET} from '../../environments/environment';
import {User} from '../model/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user/user.service';

@Component({
  selector: 'cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})

export class CoverPageComponent implements OnInit {
  private type: string;
  private user: any;
  private adminSecret = '';
  private userForm = new User();
  private formData: FormGroup;
  private email = null;
  private policyNo = null;

  userCategories: any[] = [
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Customer', viewValue: 'Customer'},
    {value: 'ClaimOfficer', viewValue: 'Claim Officer'},
    {value: 'InspectOfficer', viewValue: 'Inspect Officer'}
  ];

  constructor(
    private httpUser: UserService,
    private $router: Router) {
    this.formData = this.customerFormInit();
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

  handleUserRegister() {
    const user: User = Object.assign(this.userForm, this.formData.value);
    switch (this.user) {
      case 'customer':
        user.type = 'Customer';
        console.log(user);
        return this.addUser(user);
      case 'claim_officer':
        user.type = 'ClaimOfficer';
        console.log(user);
        return this.addUser(user);
      case 'inspect_officer':
        user.type = 'InspectOfficer';
        console.log(user);
        return this.addUser(user);
      default:
        return null;
    }
  }

  handleUserLogin() {
    console.log(this.email);
    this.httpUser.getUserByEmail(this.email)
      .subscribe(data => {
        if (data) {
          if (data.policyNo = this.policyNo) {
            switch (data.type) {
              case 'Customer':
                sessionStorage.setItem('user', 'customer');
                return this.$router.navigate(['customer']);
              case 'ClaimOfficer':
                if (this.adminSecret === ADMIN_SECRET) {
                  sessionStorage.setItem('user', 'claim_officer');
                  return this.$router.navigate(['claim_officer']);
                } else {
                  return alert('incorrect admin secret!');
                }
              case 'InspectOfficer':
                if (this.adminSecret === ADMIN_SECRET) {
                  sessionStorage.setItem('user', 'inspect_officer');
                  return this.$router.navigate(['inspect_officer']);
                } else {
                  return alert('Incorrect Admin Secret!');
                }
              default:
                return alert('User does not exits!');
            }
          }
        } else {
          return alert('User does not exits!');
        }
      });
  }

  customerFormInit() {
    return new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      fname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      policyNo: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  addUser(user) {
    this.httpUser.postUser(user)
      .subscribe(data => {
        console.log(data);
        alert('User Added!');
      });
  }

  handleSelectChange() {
    switch (this.type) {
      case 'Admin':
        return this.user = 'admin';
      case 'Customer':
        return this.user = 'customer';
      case 'ClaimOfficer':
        return this.user = 'claim_officer';
      case 'InspectOfficer':
        return this.user = 'inspect_officer';
      default:
        this.user = null;
        return this.$router.navigate(['cover']);
    }
  }
}

import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../model/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  private user = new User();
  private formData: FormGroup;

  constructor(
    private httpUser: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.formData = this.formInit();
  }

  ngOnInit() {
  }

  handleOnSubmit() {
    const user: User = Object.assign(this.user, this.formData.value);
    switch (this.data.type) {
      case 'Customers':
        user.type = 'Customer';
        console.log(user);
        return this.addUser(user);
      case 'Claim Officers':
        user.type = 'ClaimOfficer';
        console.log(user);
        return this.addUser(user);
      case 'Inspect Officers':
        user.type = 'InspectOffice';
        console.log(user);
        return this.addUser(user);
      default:
        return null;
    }
  }

  formInit() {
    return new FormGroup({
        email: new FormControl("", Validators.compose([
          Validators.required
        ])),
        type: new FormControl("", Validators.compose([
          Validators.required
        ])),
        fname: new FormControl("", Validators.compose([
          Validators.required
        ])),
        lname: new FormControl("", Validators.compose([
          Validators.required
        ])),
        phone: new FormControl("", Validators.compose([
          Validators.required
        ])),
        address: new FormControl("", Validators.compose([
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

}

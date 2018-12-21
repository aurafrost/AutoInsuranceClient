import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Claim} from '../../model/Claim';
import {ClaimService} from '../../service/claim/claim.service';
import {UserService} from '../../service/user/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  private claim = new Claim();
  private formData: FormGroup;
  constructor(
    private $router: Router,
    private httpClaim: ClaimService,
    private httpUser: UserService
  ) {
    this.formData = this.formInit();
  }

  ngOnInit() {
  }

  handleBack() {
    this.$router.navigate(['/customer/list']);
  }

  handleOnSubmit() {
    const claim: Claim = Object.assign(this.claim, this.formData.value);
    return this.addClaim(sessionStorage.getItem('userId') , claim);
  }

  formInit() {
    return new FormGroup({
      carMake: new FormControl("", Validators.compose([
        Validators.required
      ])),
      carModel: new FormControl("", Validators.compose([
        Validators.required
      ])),
      dateOfIncident: new FormControl("", Validators.compose([
        Validators.required
      ])),
      description: new FormControl("", Validators.compose([
        Validators.required
      ])),
      otherDriverLicense: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  addClaim(userId, claim) {
    console.log(claim);
    this.httpClaim.addClaim(userId, claim)
      .subscribe(data => {
        console.log(data);
        alert('Claim Added!');
      });
  }
}

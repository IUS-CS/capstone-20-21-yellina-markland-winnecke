import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../data/member';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-membership-interest',
  templateUrl: './membership-interest.component.html',
  styleUrls: ['./membership-interest.component.css']
})
export class MembershipInterestComponent implements OnInit {
  @Input() member: Member;

  person = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
    address: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z0-9])[A-Za-z0-9 _]*$/)]),
    state: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z _]*$/)]),
    city: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z _]*$/)]),
    zip: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{5}/)]),
    country: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z _]*$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)]),
    countryOfResidence: new FormControl('', [Validators.pattern(/^[A-Za-z]+$/)]),
    referral: new FormControl('', [Validators.pattern(/^[A-Za-z]+$/)])
  });

  constructor() { }

  ngOnInit(): void {
  }

}

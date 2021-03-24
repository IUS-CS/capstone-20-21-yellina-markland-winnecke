import {Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-membership-interest',
  templateUrl: './membership-interest.component.html',
  styleUrls: ['./membership-interest.component.css']
})
export class MembershipInterestComponent {
 public sendEmail(e: Event): void{
   e.preventDefault();
   emailjs.sendForm('service_omou9ie', 'template_eriirba', e.target as HTMLFormElement, 'user_ADr0WWYr2ZmiT2o2YDwJW')
     .then((result: EmailJSResponseStatus) => {
       console.log(result.text);
     }, (error) => {
       console.log(error.text);
     });
 }
}





/* FormData: FormGroup;
 constructor(private builder: FormBuilder , private connectionService: ContactService) {
   this.FormData = this.builder.group({
     firstName: ['', Validators.required, Validators.pattern(/^[A-Za-z]+$/)],
     lastName: ['', Validators.required, Validators.pattern(/^[A-Za-z]+$/)],
     address: ['', Validators.required, Validators.pattern(/^(?=.*[A-Za-z0-9])[A-Za-z0-9 _]*$/)],
     state: ['', Validators.required, Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z _]*$/)],
     city: ['', Validators.required, Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z _]*$/)],
     zip: ['', Validators.required, Validators.pattern(/^[0-9]{5}/)],
     country: ['', Validators.required, Validators.pattern(/^(?=.*[A-Za-z])[A-Za-z _]*$/)],
     email: ['', Validators.required, Validators.email],
     phoneNumber: ['', Validators.required, Validators.pattern(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/)],
     referral: ['', Validators.pattern(/^[A-Za-z]+$/)]
   });
 }
*/

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  User = 'admin';
  Pass = 'admin';
  userAdmin: string;
  passAdmin: string;
  valid: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  check(user: string, pass: string): void {
    console.log(this.User === user);
    console.log(this.Pass === pass);
    if (this.User === user && this.Pass === pass) {
      this.valid = true;
    } else{
      this.valid = false;
    }
  }

}

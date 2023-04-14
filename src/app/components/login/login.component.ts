import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  error: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    if (
      this.email == 'demo.user@auxoai.com' &&
      this.password == 'demo.password'
    ) {
      console.log('Authenticated!');
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Please Check the Email or Password';
    }
  }
}

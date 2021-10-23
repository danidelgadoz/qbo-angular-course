import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    email: 'dsds',
    password: 'fdfdfd',
  };

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('onSubmit', this.user)
    // sessionStorage.setItem('userSession', '3661411c65331184ac73d8660d0b4648');
    // this.router.navigate(['dashboard']);
  }

}

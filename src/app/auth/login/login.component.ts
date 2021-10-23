import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }

  onSubmit(): void {
    console.log('onSubmit', this.loginForm.value);
    // sessionStorage.setItem('userSession', '3661411c65331184ac73d8660d0b4648');
    // this.router.navigate(['dashboard']);
  }

}

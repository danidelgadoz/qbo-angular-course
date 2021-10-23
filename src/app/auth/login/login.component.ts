import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe(
        (data) => {
          sessionStorage.setItem('userSession', '3661411c65331184ac73d8660d0b4648');
          this.router.navigate(['dashboard']);
        },
        (error) => {
          this.matSnackBar.open(`Ups! ${error.error.message}`, 'OK', {
            duration: 3000
          });
        },
      );


  }

}

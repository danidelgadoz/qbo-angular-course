import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

const APP_ROUTES = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ];
}

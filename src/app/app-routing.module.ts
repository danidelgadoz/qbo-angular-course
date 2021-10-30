
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleComponentComponent } from './dashboard/example/example-component/example-component.component';
import { ExampleAngularMaterialComponent } from './dashboard/example/example-angular-material/example-angular-material.component';
import { ExampleFlexLayoutComponent } from './dashboard/example/example-flex-layout/example-flex-layout.component';
import { ExampleDirectivesAndPipesComponent } from './dashboard/example/example-directives-and-pipes/example-directives-and-pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './dashboard/products/product-list/product-list.component';
import { ProductDetailComponent } from './dashboard/products/product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { ExampleRxjsComponent } from './dashboard/example/example-rxjs/example-rxjs.component';

const APP_ROUTES = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'example-component', component: ExampleComponentComponent },
      { path: 'example-angular-material', component: ExampleAngularMaterialComponent },
      { path: 'example-flex-layout', component: ExampleFlexLayoutComponent },
      { path: 'example-directives-and-pipes', component: ExampleDirectivesAndPipesComponent },
      { path: 'example-rxjs', component: ExampleRxjsComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products/new', component: ProductDetailComponent },
    ]
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

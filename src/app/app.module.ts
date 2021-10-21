import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './shared/material.module';
import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './dashboard/example/example-component/example-component.component';
import { ExampleBootstrapComponent } from './dashboard/example/example-bootstrap/example-bootstrap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleAngularMaterialComponent } from './dashboard/example/example-angular-material/example-angular-material.component';
import { ExampleFlexLayoutComponent } from './dashboard/example/example-flex-layout/example-flex-layout.component';
import { ExampleDirectivesAndPipesComponent } from './dashboard/example/example-directives-and-pipes/example-directives-and-pipes.component';
import { HighlightDirective } from './dashboard/example/example-directives-and-pipes/highlight.directive';
import { OnlyNumber } from './dashboard/example/example-directives-and-pipes/only-number.directive';
import { ReversePipe } from './dashboard/example/example-directives-and-pipes/reverse.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './dashboard/products/product-list/product-list.component';
import { ProductDetailComponent } from './dashboard/products/product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    ExampleBootstrapComponent,
    ExampleAngularMaterialComponent,
    ExampleFlexLayoutComponent,
    ExampleDirectivesAndPipesComponent,
    HighlightDirective,
    OnlyNumber,
    ReversePipe,
    PageNotFoundComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
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
          { path: 'products', component: ProductListComponent },
          { path: 'products/:id', component: ProductDetailComponent },
        ]
      },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

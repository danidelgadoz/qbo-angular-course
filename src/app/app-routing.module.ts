
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleComponentComponent } from './dashboard/example/example-component/example-component.component';
import { ExampleAngularMaterialComponent } from './dashboard/example/example-angular-material/example-angular-material.component';
import { ExampleFlexLayoutComponent } from './dashboard/example/example-flex-layout/example-flex-layout.component';
import { ExampleDirectivesAndPipesComponent } from './dashboard/example/example-directives-and-pipes/example-directives-and-pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './dashboard/products/product-list/product-list.component';
import { ProductDetailComponent } from './dashboard/products/product-detail/product-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ExampleRxjsComponent } from './dashboard/example/example-rxjs/example-rxjs.component';

const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
export class AppRoutingModule {
  static components = [
    ExampleComponentComponent,
    ExampleAngularMaterialComponent,
    ExampleFlexLayoutComponent,
    ExampleDirectivesAndPipesComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductDetailComponent,
    DashboardComponent,
    ExampleRxjsComponent
  ];
}

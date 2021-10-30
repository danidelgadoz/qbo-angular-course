
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleComponentComponent } from './example/example-component/example-component.component';
import { ExampleAngularMaterialComponent } from './example/example-angular-material/example-angular-material.component';
import { ExampleFlexLayoutComponent } from './example/example-flex-layout/example-flex-layout.component';
import { ExampleDirectivesAndPipesComponent } from './example/example-directives-and-pipes/example-directives-and-pipes.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { DashboardComponent } from './dashboard.component';
import { ExampleRxjsComponent } from './example/example-rxjs/example-rxjs.component';
import { AuthGuard } from '../auth.guard';

const APP_ROUTES: Routes = [
  {
    path: '',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ],
})
export class DashboardRoutingModule {
  static components = [
    ExampleComponentComponent,
    ExampleAngularMaterialComponent,
    ExampleFlexLayoutComponent,
    ExampleDirectivesAndPipesComponent,
    ProductListComponent,
    ProductDetailComponent,
    DashboardComponent,
    ExampleRxjsComponent
  ];
}

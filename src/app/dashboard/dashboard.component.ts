import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  onLogout(): void {
    sessionStorage.removeItem('userSession');
    this.router.navigate(['auth']);
  }

}

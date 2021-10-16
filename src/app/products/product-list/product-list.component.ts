import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = [
    { id: 1, name: 'Laptop Macbook Pro', price: 8000 },
    { id: 2, name: 'Monitor Samsung', price: 1500.5 },
    { id: 3, name: 'Keyboard magic 2', price: 800 },
    { id: 4, name: 'Headphones', price: 150.3599 },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // TODO: Request for products from a API (backend) instead having them on hardcode
  }

  onNavigateToProductDetail(id: number): void {
    this.router.navigate(['/products', id]);
  }

}

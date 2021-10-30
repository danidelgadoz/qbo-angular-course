import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.productService.getAllProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }

  onNavigateToNewProduct(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  onNavigateToProductDetail(id: number): void {
    // this.router.navigate(['/products', id]);
    // Use this way to be more God
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

}

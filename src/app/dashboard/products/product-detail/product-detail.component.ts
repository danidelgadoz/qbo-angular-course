import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  productForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    this.id = `${this.activatedRoute.snapshot.paramMap.get('id')}`;
  }

  ngOnInit(): void {
    this.loadProduct();
    this.productForm = this.buildForm();
  }

  loadProduct(): void {
    this.productService.getProductById(this.id)
      .subscribe(
        (data) => {
          const { id, ...product } = data;
          console.log('product', product);
          this.productForm.setValue(product);
        }
      )
  }

  buildForm(): FormGroup {
    return new FormGroup({
      description: new FormControl(''),
      imageUrl: new FormControl(''),
      price: new FormControl(''),
      productCode: new FormControl(''),
      productName: new FormControl(''),
      releaseDate: new FormControl(''),
      starRating: new FormControl(''),
    })
  }

}

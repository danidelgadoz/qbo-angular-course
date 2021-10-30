import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

enum FormType {
  Create = 0,
  Update = 1,
};

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id!: string;
  productForm!: FormGroup;
  formType!: FormType;
  formTitle!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    const productIdFromUrlPath = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = `${productIdFromUrlPath}`;

    // Build The form for both (create and update)
    this.productForm = this.buildForm();

    if (productIdFromUrlPath !== 'new') {
      // Update product
      this.formType = FormType.Update;
      this.formTitle = 'Edit Product';
      this.loadProduct(this.id);

    } else {
      // Create product
      this.formType = FormType.Create;
      this.formTitle = 'New Product';

    }


  }

  loadProduct(idProduct: string): void {
    this.productService.getProductById(idProduct)
      .subscribe(
        (data) => {
          const { id, tags, ...product } = data;
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

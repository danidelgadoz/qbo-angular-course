import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'Laptop Macbook Pro', price: 8000 },
    { id: 2, name: 'Monitor Samsung', price: 1500.5 },
    { id: 3, name: 'Keyboard magic 2', price: 800 },
    { id: 4, name: 'Headphones', price: 150.3599 },
  ];

  constructor() { }

  getAllProducts(): any[] {
    // TODO: Request for products from a API (backend) instead having them on hardcode
    return this.products;
  }

  getProductById(id: string): any {
    // TODO: Request for product from a API (backend) instead having them on hardcode
    return null;
  }

  addProduct(product: any): any {
    // TODO: Request for product from a API (backend) instead having them on hardcode
    return this.products.push(product);
  }

}

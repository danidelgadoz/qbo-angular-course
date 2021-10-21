import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllProducts(): Observable<any> {
    // TODO: Request for products from a API (backend) instead having them on hardcode
    return this.httpClient.get('https://danidelgadoz.com/api/products')
  }

  getProductById(id: string): any {
    // TODO: Request for product from a API (backend) instead having them on hardcode
    return null;
  }

  addProduct(product: any): any {
    // TODO: Request for product from a API (backend) instead having them on hardcode
  }

}

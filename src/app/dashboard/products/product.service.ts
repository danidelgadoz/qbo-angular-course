import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('https://danidelgadoz.com/api/products')
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`https://danidelgadoz.com/api/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    const body = product;
    return this.httpClient.post<Product>('https://danidelgadoz.com/api/products', body);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`https://danidelgadoz.com/api/products/${product.id}`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.httpClient.delete<Product>(`https://danidelgadoz.com/api/products/${id}`);
  }

}

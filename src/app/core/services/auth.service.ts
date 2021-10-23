import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(email: string, password: string) {
    const body = { email, password};
    return this.httpClient.post('https://danidelgadoz.com/oauth/token', body)
  }

}

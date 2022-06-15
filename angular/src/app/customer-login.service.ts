import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerLogin } from './customer-login';

@Injectable({
  providedIn: 'root',
})
export class CustomerLoginService {
  private baseURL = 'http://localhost:8081/customerlogin/login';
  constructor(private httpClient: HttpClient) {}
  logincustomer(customerlogin: CustomerLogin): Observable<Object> {
    console.log(customerlogin);
    return this.httpClient.post(`${this.baseURL}`, customerlogin);
  }
}

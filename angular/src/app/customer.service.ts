import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}
  private baseURL = 'http://localhost:8081/customer/customers';
  private baseURL1 = 'http://localhost:8081/customer/getcustomers';
  private baseURL2 = 'http://localhost:8081/engineer/update';

  createcustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, customer);
  }
  getcustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL1}`);
  }

  getcomplaintbyname(name: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL1}/${name}`);
  }

  updatecustomerbyname(name: string, customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.baseURL2}/${name}`, customer);
  }
}

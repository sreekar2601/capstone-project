import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EngineerLogin } from './engineer-login';

@Injectable({
  providedIn: 'root',
})
export class EngineerLoginService {
  private baseURL = 'http://localhost:8081/engineerlogin/login';
  constructor(private httpClient: HttpClient) {}
  loginengineer(engineerlogin: EngineerLogin): Observable<Object> {
    console.log(engineerlogin);
    return this.httpClient.post(`${this.baseURL}`, engineerlogin);
  }
}

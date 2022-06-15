import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagerLogin } from './manager-login';

@Injectable({
  providedIn: 'root',
})
export class ManagerLoginService {
  private baseURL = 'http://localhost:8081/managerlogin/login';
  constructor(private httpClient: HttpClient) {}

  loginmanager(managerlogin: ManagerLogin): Observable<Object> {
    console.log(managerlogin);
    return this.httpClient.post(`${this.baseURL}`, managerlogin);
  }
}

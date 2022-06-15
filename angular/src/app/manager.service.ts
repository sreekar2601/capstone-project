import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from './manager';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private httpClient: HttpClient) {}

  private baseURL = 'http://localhost:8081/manager/managers';
  private baseURL1 = 'http://localhost:8081/manager/getmanagers';

  createmanager(manager: Manager): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, manager);
  }

  getmanagers(): Observable<Manager[]> {
    return this.httpClient.get<Manager[]>(`${this.baseURL1}`);
  }
}

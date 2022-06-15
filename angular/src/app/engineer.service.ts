import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Engineer } from './engineer';

@Injectable({
  providedIn: 'root',
})
export class EngineerService {
  constructor(private httpClient: HttpClient) {}
  private baseURL = 'http://localhost:8081/engineer/engineers';
  private baseURL1 = 'http://localhost:8081/engineer/getengineers';

  createmanager(engineer: Engineer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, engineer);
  }

  getengineers(): Observable<Engineer[]> {
    return this.httpClient.get<Engineer[]>(`${this.baseURL1}`);
  }
}

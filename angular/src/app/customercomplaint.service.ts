import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customercomplaint } from './customercomplaint';

@Injectable({
  providedIn: 'root',
})
export class CustomercomplaintService {
  private baseURL = 'http://localhost:8081/customercomplaint/create';
  private baseUrl1 = 'http://localhost:8081/customercomplaint/create/sreekar';
  constructor(private httpClient: HttpClient) {}
  createcomplaint(complaint: Customercomplaint): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, complaint);
  }

  getcomplaintbyname(name: string): Observable<Customercomplaint[]> {
    return this.httpClient.get<Customercomplaint[]>(`${this.baseUrl1}`);
  }
}

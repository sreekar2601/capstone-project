import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignengineer } from './assignengineer';

@Injectable({
  providedIn: 'root',
})
export class AssignengineerService {
  private baseURL = 'http://localhost:8081/assign/engineer';
  private baseURL1 = 'http://localhost:8081/assign/getby';
  private baseURL2 = 'http://localhost:8081/assign/update';
  constructor(private httpClient: HttpClient) {}

  getcomplaints(): Observable<Assignengineer[]> {
    return this.httpClient.get<Assignengineer[]>(`${this.baseURL}`);
  }
  getcomplaintbyname(name: string): Observable<Assignengineer> {
    return this.httpClient.get<Assignengineer>(`${this.baseURL1}/${name}`);
  }
  updatecomplaintbyname(
    name: string,
    engineer: Assignengineer
  ): Observable<Object> {
    return this.httpClient.put(`${this.baseURL2}/${name}`, engineer);
  }
}

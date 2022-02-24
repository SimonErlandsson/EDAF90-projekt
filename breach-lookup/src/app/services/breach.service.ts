import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Breach } from '../model/Breach';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BreachService {
  private apiUrl = 'https://haveibeenpwned.com/api/v3/breaches';

  constructor(private http: HttpClient) {}

  getBreaches(): Observable<Breach[]> {
    return this.http.get<Breach[]>(this.apiUrl, {});
  }
}

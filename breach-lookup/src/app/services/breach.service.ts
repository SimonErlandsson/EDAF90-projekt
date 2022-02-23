import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Breach } from '../model/Breach';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BreachService {
  private apiUrl = 'https://haveibeenpwned.com/api/v3/breaches';

  //BREACHES: Breach[] = [
  //   {
  //     ame: 'testName',
  //     title: 'testTitle',
  //     domain: 'testDomain',
  //     breachDate: '020202',
  //     addedDate: '010101',
  //     modifiedDate: '030303',
  //     pwnCount: 10,
  //     description: 'breach example',
  //     dataClasses: [],
  //     isVerified: true,
  //     isFabricated: false,
  //     isSensitive: true,
  //     isRetired: false,
  //     isSpamList: false,
  //     isMalware: false,
  //     logoPath: 'testlogoPath',
  //   },
  //   {
  //     name: 'testName2',
  //     title: 'testTitle',
  //     domain: 'testDomain',
  //     breachDate: '020202',
  //     addedDate: '010101',
  //     modifiedDate: '030303',
  //     pwnCount: 100,
  //     description: 'breach example number 2',
  //     dataClasses: [],
  //     isVerified: true,
  //     isFabricated: false,
  //     isSensitive: true,
  //     isRetired: false,
  //     isSpamList: false,
  //     isMalware: false,
  //     logoPath: 'testlogoPath',
  //   },
  // ];
  constructor(private http: HttpClient) {}

  getBreaches(): Observable<Breach[]> {
    // const breaches = of(this.BREACHES);
    // return breaches;
    return this.http.get<Breach[]>(this.apiUrl);
  }
}

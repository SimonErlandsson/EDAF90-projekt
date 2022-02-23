import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Breach } from '../model/Breach';

@Injectable({
  providedIn: 'root',
})
export class BreachService {
  BREACHES: Breach[] = [
    {
      name: 'testName',
      title: 'testTitle',
      domain: 'testDomain',
      breachDate: '020202', //	The date (with no time) the breach originally occurred on in ISO 8601 format. This is not always accurate — frequently breaches are discovered and reported long after the original incident. Use this attribute as a guide only.
      addedDate: '010101', //	The date and time (precision to the minute) the breach was added to the system in ISO 8601 format.
      modifiedDate: '030303', //	The date and time (precision to the minute) the breach was modified in ISO 8601 format. This will only differ from the AddedDate attribute if other attributes represented here are changed or data in the breach itself is changed (i.e. additional data is identified and loaded). It is always either equal to or greater then the AddedDate attribute, never less than.
      pwnCount: 10, //	The total number of accounts loaded into the system. This is usually less than the total number reported by the media due to duplication or other data integrity issues in the source data.
      description: 'breach example', //	Contains an overview of the breach represented in HTML markup. The description may include markup such as emphasis and strong tags as well as hyperlinks.
      dataClasses: [], //	This attribute describes the nature of the data compromised in the breach and contains an alphabetically ordered string array of impacted data classes.
      isVerified: true, //	Indicates that the breach is considered unverified. An unverified breach may not have been hacked from the indicated website. An unverified breach is still loaded into HIBP when there's sufficient confidence that a significant portion of the data is legitimate.
      isFabricated: false, //	Indicates that the breach is considered fabricated. A fabricated breach is unlikely to have been hacked from the indicated website and usually contains a large amount of manufactured data. However, it still contains legitimate email addresses and asserts that the account owners were compromised in the alleged breach.
      isSensitive: true, //	Indicates if the breach is considered sensitive. The public API will not return any accounts for a breach flagged as sensitive.
      isRetired: false, //	Indicates if the breach has been retired. This data has been permanently removed and will not be returned by the API.
      isSpamList: false, //	Indicates if the breach is considered a spam list. This flag has no impact on any other attributes but it means that the data has not come as a result of a security compromise.
      isMalware: false, //	Indicates if the breach is sourced from malware. This flag has no impact on any other attributes, it merely flags that the data was sourced from a malware campaign rather than a security compromise of an online service.
      logoPath: 'testlogoPath',
    },
  ];
  constructor() {}

  getBreaches(): Observable<Breach[]> {
    const breaches = of(this.BREACHES);
    return breaches;
  }
}

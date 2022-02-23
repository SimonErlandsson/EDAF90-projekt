import { Component, OnInit } from '@angular/core';
import { BreachService } from '../services/breach.service';
import { Breach } from '../model/Breach';
import { Sort } from '@angular/material/sort';
@Component({
  selector: 'app-breach-presenter',
  templateUrl: './breach-presenter.component.html',
  styleUrls: ['./breach-presenter.component.css'],
})
export class BreachPresenterComponent implements OnInit {
  breaches: Breach[] = [];

  constructor(private breachService: BreachService) {}

  ngOnInit(): void {
    this.breachService
      .getBreaches()
      .subscribe((breaches) => (this.breaches = breaches));
  }
  sortData(sort: Sort) {
    const data = this.breaches.slice();
    if (!sort.active || sort.direction === '') {
      this.breaches = data;
      return;
    }

    this.breaches = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.Name, b.Name, isAsc);
        case 'pwnCount':
          return compare(a.PwnCount, b.PwnCount, isAsc);
        case 'breach_date':
          return compare(a.BreachDate, b.BreachDate, isAsc);
        case 'domain':
          return compare(a.Domain, b.Domain, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

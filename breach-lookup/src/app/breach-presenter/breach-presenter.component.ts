import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreachService } from '../services/breach.service';
import { Breach } from '../model/Breach';
import { Sort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BreachDialogComponent } from '../breach-dialog/breach-dialog.component';

@Component({
    selector: 'app-breach-presenter',
    templateUrl: './breach-presenter.component.html',
    styleUrls: ['./breach-presenter.component.css'],
})
export class BreachPresenterComponent implements OnInit, OnDestroy {
    breaches: Breach[] = [];
    subscription: Subscription;

    constructor(private breachService: BreachService, private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.subscription = this.breachService
            .getBreaches()
            .subscribe((breaches) => (this.breaches = breaches));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
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

    formatCategories(categories: string[]): string {
        return categories
            .map(x => x)
            .reduce((acc, x) => `${acc} ${x},`, "")
    }

    onRowClick(breach: Breach): void {
        this.matDialog.open(BreachDialogComponent, { data: breach });
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

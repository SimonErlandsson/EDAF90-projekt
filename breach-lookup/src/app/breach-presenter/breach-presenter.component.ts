import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BreachService } from '../services/breach.service';
import { Breach } from '../model/Breach';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BreachDialogComponent } from '../breach-dialog/breach-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-breach-presenter',
    templateUrl: './breach-presenter.component.html',
    styleUrls: ['./breach-presenter.component.css'],
})
export class BreachPresenterComponent implements OnInit, OnDestroy {
    breaches: MatTableDataSource<Breach>;
    subscription: Subscription;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns = ["logo", "Name", "PwnCount", "BreachDate", "Domain", "categories"]


    constructor(private breachService: BreachService, private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.subscription = this.breachService
            .getBreaches()
            .subscribe((breaches) => {
                this.breaches = new MatTableDataSource(breaches);
                this.breaches.sort = this.sort;
                this.breaches.paginator = this.paginator;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    formatCategories(categories: string[]): string {
        return categories
            .map(x => x)
            .reduce((acc, x) => `${acc} ${x},`, "").slice(0, -1)
    }

    onRowClick(breach: Breach): void {
        this.matDialog.open(BreachDialogComponent, { data: breach });
    }
    onFilter(event: Event) {
      console.log(event)
      const filterValue = (event.target as HTMLInputElement).value;
      this.breaches.filter = filterValue.trim().toLowerCase();
  }

}

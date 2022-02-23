import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreachService } from '../services/breach.service';
import { Breach } from '../model/Breach';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-breach-presenter',
    templateUrl: './breach-presenter.component.html',
    styleUrls: ['./breach-presenter.component.css'],
})
export class BreachPresenterComponent implements OnInit, OnDestroy {
    breaches: Breach[] = [];
    subscription: Subscription;


    constructor(private breachService: BreachService) { }

    ngOnInit(): void {
        this.subscription = this.breachService
            .getBreaches()
            .subscribe((breaches) => (this.breaches = breaches));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}

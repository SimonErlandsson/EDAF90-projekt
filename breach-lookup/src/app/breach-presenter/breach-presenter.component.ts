import { Component, OnInit } from '@angular/core';
import { BreachService } from '../services/breach.service';
import { Breach } from '../model/Breach';

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
}

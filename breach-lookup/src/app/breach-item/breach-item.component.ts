import { Component, OnInit, Input } from '@angular/core';
import { Breach } from '../model/Breach';
@Component({
  selector: 'app-breach-item',
  templateUrl: './breach-item.component.html',
  styleUrls: ['./breach-item.component.css'],
})
export class BreachItemComponent implements OnInit {
  @Input() breach: Breach;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Breach } from '../model/Breach';

@Component({
    selector: 'app-breach-dialog',
    templateUrl: './breach-dialog.component.html',
    styleUrls: ['./breach-dialog.component.css']
})
export class BreachDialogComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public breach: Breach) { }

    ngOnInit(): void { }

}


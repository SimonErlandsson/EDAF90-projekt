import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreachPresenterComponent } from './breach-presenter/breach-presenter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreachItemComponent } from './breach-item/breach-item.component';
import {
    MatExpansionModule,
    MatExpansionPanel,
    MatAccordion,
} from '@angular/material/expansion';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BreachDialogComponent } from './breach-dialog/breach-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [
        AppComponent,
        BreachPresenterComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        HomeComponent,
        BreachItemComponent,
        BreachDialogComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule,
        NgbModule,
        HttpClientModule,
        MatExpansionModule,
        ScrollingModule,
        MatSortModule,
        MatDialogModule,
        MatPaginatorModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

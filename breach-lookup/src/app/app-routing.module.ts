import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreachPresenterComponent } from './breach-presenter/breach-presenter.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: "breaches", component: BreachPresenterComponent
    },
    {
        path: "home", component: HomeComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

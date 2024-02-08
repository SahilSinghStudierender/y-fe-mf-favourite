import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {AppComponent} from "./core/container/app.component";
import {APP_BASE_HREF} from "@angular/common";

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: '**', component: EmptyRouteComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        {provide: APP_BASE_HREF, useValue: "/"}
    ]
})
export class AppRoutingModule {
}

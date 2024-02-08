import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import { FavouriteComponent } from './favourite/container/favourite/favourite.component';
import {AppComponent} from "./core/container/app.component";
import {PostOverviewComponent} from "./favourite/components/post-overview/post-overview.component";

@NgModule({
    declarations: [
        AppComponent,
        EmptyRouteComponent,
        FavouriteComponent,
        PostOverviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

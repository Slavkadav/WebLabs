import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MemListComponent} from './mem-list/mem-list.component';
import {MemItemComponent} from './mem-list/mem-item/mem-item.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {FormsModule} from "@angular/forms";
import {Route, RouterModule, Routes} from "@angular/router";

let routes: Route[] = [
    {path: 'signup', component: SignupComponent},
    {path: '', component: MemListComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MemListComponent,
        MemItemComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

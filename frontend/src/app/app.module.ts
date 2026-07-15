import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ClienteListComponent,
        ClienteFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
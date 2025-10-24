import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormControlComponent } from './components/form-control.component/form-control.component';
import { FormGroupComponent } from './components/form-group.component/form-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidatoriComponent } from './components/validatori.component/validatori.component';
import { GestioneErroriComponent } from './components/gestione-errori.component/gestione-errori.component';
import { ValidatoriCustomControlComponent } from './components/validatori-custom-control.component/validatori-custom-control.component';
import { ValidatoriCustomGroupComponent } from './components/validatori-custom-group.component/validatori-custom-group.component';


@NgModule({
  declarations: [
    App,
    FormControlComponent,
    FormGroupComponent,
    ValidatoriComponent,
    GestioneErroriComponent,
    ValidatoriCustomControlComponent,
    ValidatoriCustomGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './components/form-control.component/form-control.component';
import { FormGroupComponent } from './components/form-group.component/form-group.component';


@NgModule({
  declarations: [
    App,
    FormControlComponent,
    FormGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule // Necessario per usare FormControl e FormGroup nei componenti che NON sono standalone
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

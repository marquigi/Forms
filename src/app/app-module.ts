import { NgModule } from '@angular/core'; // Modulo principale Angular
import { BrowserModule } from '@angular/platform-browser'; // Necessario per applicazioni web in browser

import { AppRoutingModule } from './app-routing-module'; // Modulo di routing dell'app
import { App } from './app'; // Componente root dell'applicazione
import { FormControlComponent } from './components/form-control.component/form-control.component'; // Esempio base di FormControl
import { FormGroupComponent } from './components/form-group.component/form-group.component'; // Esempio di FormGroup
import { ReactiveFormsModule } from '@angular/forms'; // Modulo necessario per usare Reactive Forms (FormControl, FormGroup, formControlName, ecc.)
import { ValidatoriComponent } from './components/validatori.component/validatori.component'; // Componente gestione validazioni
import { GestioneErroriComponent } from './components/gestione-errori.component/gestione-errori.component'; // Messaggi di errore reattivi
import { ValidatoriCustomControlComponent } from './components/validatori-custom-control.component/validatori-custom-control.component'; // Validatore personalizzato su FormControl
import { ValidatoriCustomGroupComponent } from './components/validatori-custom-group.component/validatori-custom-group.component';
import { FormArrayComponent } from './components/form-array.component/form-array.component'; // Validatore personalizzato su FormGroup


@NgModule({
  declarations: [
    // Sintassi: elenco componenti, direttive e pipe; Semantica: elementi dichiarati e disponibili nel modulo
    App,
    FormControlComponent,
    FormGroupComponent,
    ValidatoriComponent,
    GestioneErroriComponent,
    ValidatoriCustomControlComponent,
    ValidatoriCustomGroupComponent,
    FormArrayComponent
  ],
  imports: [
    // Moduli che il progetto utilizza
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [App]
  // Componente iniziale che viene avviato
})
export class AppModule { }

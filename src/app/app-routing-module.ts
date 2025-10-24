import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './components/form-control.component/form-control.component';
import { FormGroupComponent } from './components/form-group.component/form-group.component';
import { ValidatoriComponent } from './components/validatori.component/validatori.component';
import { GestioneErroriComponent } from './components/gestione-errori.component/gestione-errori.component';
import { ValidatoriCustomControlComponent } from './components/validatori-custom-control.component/validatori-custom-control.component';
import { ValidatoriCustomGroupComponent } from './components/validatori-custom-group.component/validatori-custom-group.component';

const routes: Routes = [
  // Configurazione delle rotte principali dell'app
  { path: '', component: FormControlComponent },
  // Rotta base: mostra FormControlComponent
  { path: 'form-group', component: FormGroupComponent },
  // Rotta per esempio FormGroup
  // Sezione dedicata ai validatori con rotte annidate
  {
    path: 'validatori',
    component: ValidatoriComponent,
    children: [
      { path: '', component: GestioneErroriComponent },
      // Rotta iniziale dei validatori: gestione errori
      { path: 'custom-control', component: ValidatoriCustomControlComponent },
      // Esempio validatore custom su FormControl
      { path: 'custom-group', component: ValidatoriCustomGroupComponent },
      // Esempio validatore custom su FormGroup
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Inizializzo il router con queste rotte
  exports: [RouterModule],
  // Esporto il Router per usarlo in tutta l'app
})
export class AppRoutingModule { }


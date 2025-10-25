import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './components/form-control.component/form-control.component';
import { FormGroupComponent } from './components/form-group.component/form-group.component';
import { ValidatoriComponent } from './components/validatori.component/validatori.component';
import { GestioneErroriComponent } from './components/gestione-errori.component/gestione-errori.component';
import { ValidatoriCustomControlComponent } from './components/validatori-custom-control.component/validatori-custom-control.component';
import { ValidatoriCustomGroupComponent } from './components/validatori-custom-group.component/validatori-custom-group.component';

const routes: Routes = [
  // Sintassi: path '', Semantica: route base mostra FormControlComponent
  { path: '', component: FormControlComponent },
  // Sintassi: path 'form-group', Semantica: mostra FormGroupComponent
  { path: 'form-group', component: FormGroupComponent },
  // Sintassi: path 'validatori' con children, Semantica: validatori con rotte annidate
  {
    path: 'validatori',
    component: ValidatoriComponent,
    children: [
      // Sintassi: path '', Semantica: gestione errori validatori
      { path: '', component: GestioneErroriComponent },
      // Sintassi: path 'custom-control', Semantica: validatore custom su FormControl
      { path: 'custom-control', component: ValidatoriCustomControlComponent },
      // Sintassi: path 'custom-group', Semantica: validatore custom su FormGroup
      { path: 'custom-group', component: ValidatoriCustomGroupComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // Sintassi: import RouterModule con routes, Semantica: inizializza router con configurazione
  exports: [RouterModule],
  // Sintassi: export RouterModule, Semantica: rende router disponibile nell'app
})
export class AppRoutingModule { }


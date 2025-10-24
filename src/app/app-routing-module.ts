import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ValidatoriComponent } from './validatori/validatori.component';
import { GestioneErroriComponent } from './gestione-errori/gestione-errori.component';
import { ValidatoriCustomControlComponent } from './validatori-custom-control/validatori-custom-control.component';
import { ValidatoriCustomGroupComponent } from './validatori-custom-group/validatori-custom-group.component';

const routes: Routes = [
  { path: '', component: FormControlComponent },
  { path: 'form-group', component: FormGroupComponent },
  {
    path: 'validatori',
    component: ValidatoriComponent,
    children: [
      { path: '', component: GestioneErroriComponent },
      { path: 'custom-control', component: ValidatoriCustomControlComponent },
      { path: 'custom-group', component: ValidatoriCustomGroupComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

